'use strict';

let cost = prompt('Стоимость товара');
let money = prompt('Количесвто денег клиента');

if(cost > 0 && money > 0){
let pokupka = (cost == money) ? 'Покупка совершена' : (cost > money)? `Для покупки не хватает ${cost - money} р.` : `Покупка совершена. Сдача ${money - cost} р.`;
alert(pokupka);}
else alert('Неверный фомат данных')


let num = prompt('Введите число');
let znach = (num>0)?'1':(num<0)?'-1':(num==0)?'0':('Неверный формат');
alert(znach)


let a = 2;
let b = 3;
let result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);


let login = prompt('Введите логин');
let message = (login == 'Сотрудник') ? 'Привет':(login == 'Директор') ? 'Здравствуйте':(login == '') ? 'Нет логина': '';
alert(message);



let log = prompt('Введите логин');
if (log == 'Админ')  {
   let password =  prompt('Введите пароль', '');
    if(password == 'Я главный'){
        alert('Здравствуйте');
    }else if (password=='' || password==null) alert('Отменено');
    else alert('Неверный пароль');
}else if(log == '' || log==null){
    alert('Отменено');
}else{
    alert('Я вас не знаю!');
}


