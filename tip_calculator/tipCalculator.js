const totalBill = document.getElementById("billTotal");
const tipAmount = document.getElementById("tipAmount");
const billWithTip = document.getElementById("totalBillWithTip");

const tipValue = document.getElementById("tipInput");

totalBill.onchange = function () {
    let pay = Number(totalBill.value);
    let tip = Number(tipValue.value);

    tipAmount.disabled = false;
    billWithTip.disabled = false;

    console.log(tip);

    tip = pay * (tip / 100);
    pay = pay + tip;

    tipAmount.value = tip.toFixed(2);
    billWithTip.value = pay.toFixed(2);
};

tipValue.onchange = function () {
    let pay = Number(totalBill.value);
    let tip = Number(tipValue.value);

    tipAmount.disabled = false;
    billWithTip.disabled = false;

    console.log(tip);

    tip = pay * (tip / 100);
    pay = pay + tip;

    tipAmount.value = tip.toFixed(2);
    billWithTip.value = pay.toFixed(2);
};
