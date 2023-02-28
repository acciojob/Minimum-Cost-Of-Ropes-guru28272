//your code here
const formEle = document.querySelector(`#form`);
const inputVal = document.querySelector(`input`);
const result = document.querySelector(`#result`);
const submitInput = inputVal.nextElementSibling;

submitInput.addEventListener(`click`, function (event) {
  event.preventDefault();
  let arr = inputVal.value.split(`,`);
  getSorted(arr);

  let res = 0;
  let cost = 0;
  while (arr.length > 1) {
    res = Number(arr[0]) + Number(arr[1]);
    // console.log(res);

    arr.splice(0, 2);
    arr.push(res);

    cost += res;

    getSorted(arr);
  }
  result.innerText = cost;
});

function getSorted(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
}
