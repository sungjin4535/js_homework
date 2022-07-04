window.onload = function(){
    document.getElementById("add-button").addEventListener("click", Click);
}




// let tb1 = document.createElement("t1")
// let tb2 = document.createElement("t2")
// let tb3 = document.createElement("t3")

// let tr = document.createElement("TR")
// table.appendChild

// document.getElementById("schedule").addEventListener("keyup", function(event) {
    
//     if (event,keyCode === 13) {
//         event.preventDefault();
//         Click();
//         }
        

//     });

    

// document.getElementById("schedule").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         document.getElementById("add-Button").click();
//     }
// });

// document.getElementById("schedule").addEventListener("keyup", function (event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("add-Button").click();
//     }
// });
// document.getElementById("schedule").addEventListener("keypress", (event) => {
//         const ENTER = 13
//         if (event === ENTER)
//         document.getElementById("add-Button").click();

// });

// document.getElementById("schedule").addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("add-Button").click();
//     }
// });
            

// function onKeyUp(e){
//     if (e.keyCode == 13){
//     	Click();
//     }
// }

// document.getElementById("schedule").addEventListener("keyup",function(event){
//     if(event.keyCode == 13){
//         event.preventDefault();
//         document.getElementById("add-button").click();
//     }
// });

function Click() {


let today = new Date();

let year = today.getFullYear();

let month = today.getMonth() + 1

let date = today.getDate(); // 일

let dt = year + '-' + month + '-' + date




let content = document.getElementById("schedule").value;


let table = document.getElementsByClassName("table__table");


// 새 행(Row) 추가 (테이블 중간에)
const newRow = table[0].insertRow();
  
// 새 행(Row)에 Cell 추가
const newCell1 = newRow.insertCell(0);
const newCell2 = newRow.insertCell(1);
const newCell3 = newRow.insertCell(2)

// Cell에 텍스트 추가
newCell1.innerText = dt;
newCell2.innerText = content;
newCell3.innerHTML = "<input type='checkbox' id='cbox' name='ccbox' onclick='is_checked()'></input>";



// function is_checked() {
  
//     // 1. checkbox element를 찾습니다.
//     const checkbox = document.getElementById('cbox');
  
//     // 2. checked 속성을 체크합니다.
//     const is_checked = checkbox.checked;
  
//     // 3. 결과를 출력합니다.
//     document.getElementById('result').innerText = is_checked;
    
//   }


// if (ccbox.checked = "true");
//     confirm("정말 삭제하시겠습니까?")



document.getElementById("cbox").addEventListener("click", checkbox);

function checkbox() {
    if (confirm("정말로 삭제할거야?"))
       {
           newRow.remove()
        // document.getElementsByClassName("table__table").deleteRow()
        
       } else {
        document.getElementById("cbox").checked = false
       }
    }
}
// function checkbox() {
//     let check = confirm("정말 삭제하시겠습니까");
    
//   }




// {/* <head>
//  <script language="javascript">
//  function showConfirm() {
//  if (confirm("어떤 버튼을 누르시겠습니까?"))
//   {
//    alert("확인 버튼을 눌렀습니다.");
//   } else {
//    alert("취소 버튼을 눌렀습니다.");
//   }
//  }
//  </script>
// </head> */}

// {/* <label for ="cbox">체크박스</label>
// <input type="checkbox" id="cbox" name="cbox">
// <button id="btn">체크하기</button>

// <script>
// var cbox = document.getElementById("cbox");
// var btn = document.getElementById("btn");

// //이벤트 걸어준 후
// btn.addEventListener('click', function(){
// 		//checked 제어
// 	 	cbox.checked = true;
// });
// </script> */}

