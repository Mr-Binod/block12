




const socket = io.connect();
let selectSeatsName = selectBox.value;

socket.on('reserve', (data) => {
    const {seatsName ,x, y} = data;
    console.log(data)
    if(selectSeatsName === seatsName) { 
        // "input[value='1']"
        let target = document.querySelector(`div[data-x="${x}"][data-y="${y}"]`)
        console.log(target)
        target.classList.remove('enable');
        target.classList.add('disable');
    }
})

selectBox.onchange = (e) => {
    content.innerHTML = "";
    selectSeatsName = e.target.value;
    getSeats(selectSeatsName)
}

const getSeats = async(seatsName) => {
    const { data } = await axios.get(`/seats?seatsName=${seatsName}`);
    console.log(data,'asdfasd')
    data.forEach((el, lineindex) => {
        let line = document.createElement('div');
        line.classList.add('line')
        console.log(`${lineindex} 번 줄`)
        console.log(`${el} 줄에 뿌려야할 시트 내용 ${typeof el}`)
        el.forEach((el, seatindex) => {
            // console.log(`${lineindex + 1} X ${seatindex + 1} = ${(lineindex + 1) * (seatindex + 1)}`)
            let seat = document.createElement('div');
            seat.classList.add('seat');
            seat.setAttribute("data-x", seatindex)
            seat.setAttribute("data-y", lineindex)
            if(el === 1) {
                // 예약이 가능한 시트
                seat.classList.add('enable');
                seat.onclick = (e) => {
                    if(e.target.classList.contains('disable')) return;
                    let x = e.target.getAttribute("data-x");
                    let y = e.target.getAttribute("data-y");

                    if(confirm('이 좌석을 예약할거니?')) {
                        // 예약
                        socket.emit('reserve', {seatno : 1, seatsName : selectBox.value, x, y})
                    }else {
                        socket.emit('reserve', {seatno : 2, seatsName : selectBox.value, x, y})
                        alert('예약 취소되었어요')
                    }
                }
            }else if(el === 2) {
                
                
                seat.classList.add('disable')
            }
            line.append(seat);
        })
        content.append(line)
    })
}


getSeats(selectSeatsName); 