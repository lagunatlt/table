let mo8 = document.getElementById('mo8');
let tu8 = document.getElementById('tu8');
let we8 = document.getElementById('we8');
let th8 = document.getElementById('th8');
let fr8 = document.getElementById('fr8');
let sa8 = document.getElementById('sa8');
let su8 = document.getElementById('su8');

let mo9 = document.getElementById('mo9');
let tu9 = document.getElementById('tu9');
let we9 = document.getElementById('we9');
let th9 = document.getElementById('th9');
let fr9 = document.getElementById('fr9');
let sa9 = document.getElementById('sa9');
let su9 = document.getElementById('su9');

let mo10 = document.getElementById('mo10');
let tu10 = document.getElementById('tu10');
let we10 = document.getElementById('we10');
let th10 = document.getElementById('th10');
let fr10 = document.getElementById('fr10');
let sa10 = document.getElementById('sa10');
let su10 = document.getElementById('su10');

let mo11 = document.getElementById('mo11');
let tu11 = document.getElementById('tu11');
let we11 = document.getElementById('we11');
let th11 = document.getElementById('th11');
let fr11 = document.getElementById('fr11');
let sa11 = document.getElementById('sa11');
let su11 = document.getElementById('su11');

let mo12 = document.getElementById('mo12');
let tu12 = document.getElementById('tu12');
let we12 = document.getElementById('we12');
let th12 = document.getElementById('th12');
let fr12 = document.getElementById('fr12');
let sa12 = document.getElementById('sa12');
let su12 = document.getElementById('su12');

let mo13 = document.getElementById('mo13');
let tu13 = document.getElementById('tu13');
let we13 = document.getElementById('we13');
let th13 = document.getElementById('th13');
let fr13 = document.getElementById('fr13');
let sa13 = document.getElementById('sa13');
let su13 = document.getElementById('su13');

let mo14 = document.getElementById('mo14');
let tu14 = document.getElementById('tu14');
let we14 = document.getElementById('we14');
let th14 = document.getElementById('th14');
let fr14 = document.getElementById('fr14');
let sa14 = document.getElementById('sa14');
let su14 = document.getElementById('su14');

let mo15 = document.getElementById('mo15');
let tu15 = document.getElementById('tu15');
let we15 = document.getElementById('we15');
let th15 = document.getElementById('th15');
let fr15 = document.getElementById('fr15');
let sa15 = document.getElementById('sa15');
let su15 = document.getElementById('su15');

let mo16 = document.getElementById('mo16');
let tu16 = document.getElementById('tu16');
let we16 = document.getElementById('we16');
let th16 = document.getElementById('th16');
let fr16 = document.getElementById('fr16');
let sa16 = document.getElementById('sa16');
let su16 = document.getElementById('su16');

let mo17 = document.getElementById('mo17');
let tu17 = document.getElementById('tu17');
let we17 = document.getElementById('we17');
let th17 = document.getElementById('th17');
let fr17 = document.getElementById('fr17');
let sa17 = document.getElementById('sa17');
let su17 = document.getElementById('su17');

let mo18 = document.getElementById('mo18');
let tu18 = document.getElementById('tu18');
let we18 = document.getElementById('we18');
let th18 = document.getElementById('th18');
let fr18 = document.getElementById('fr18');
let sa18 = document.getElementById('sa18');
let su18 = document.getElementById('su18');

let mo19 = document.getElementById('mo19');
let tu19 = document.getElementById('tu19');
let we19 = document.getElementById('we19');
let th19 = document.getElementById('th19');
let fr19 = document.getElementById('fr19');
let sa19 = document.getElementById('sa19');
let su19 = document.getElementById('su19');

let mo20 = document.getElementById('mo20');
let tu20 = document.getElementById('tu20');
let we20 = document.getElementById('we20');
let th20 = document.getElementById('th20');
let fr20 = document.getElementById('fr20');
let sa20 = document.getElementById('sa20');
let su20 = document.getElementById('su20');

let mo21 = document.getElementById('mo21');
let tu21 = document.getElementById('tu21');
let we21 = document.getElementById('we21');
let th21 = document.getElementById('th21');
let fr21 = document.getElementById('fr21');
let sa21 = document.getElementById('sa21');
let su21 = document.getElementById('su21');

let it = function(el) {
	el.classList.add('indtr');
	el.innerText = 'Индивидуальные тренировки';
};
let pi = function (el) {
	el.classList.add('pilates');
	el.innerText = 'Пилатес';
};
let pi_st = function (el) {
	el.classList.add('pilates-str');
	el.innerText = 'Пилатес (+стретчинг)';
};
let po = function (el) {
	el.classList.add('port');
	el.innerText = 'PortDeBras';
};
let zd = function (el) {
	el.classList.add('zdor');
	el.innerText = 'Здоровое тело';
};
let st = function (el) {
	el.classList.add('strech');
	el.innerText = 'Стретчинг';
};
let fi = function (el) {
	el.classList.add('fit');
	el.innerText = 'Фитнес йога';
};
let sh = function (el) {
	el.classList.add('shpagat');
	el.innerText = 'Шпагат';
};
let si_pi = function (el) {
	el.classList.add('sila-pilates');
	el.innerText = 'Силовой пилатес';
};
let mfr = function (el) {
	el.classList.add('mfr');
	el.innerText = 'МФР';
};
let mm = function (el) {
	el.classList.add('mama');
	el.innerText = 'Мама + малыш';
};
let zu = function (el) {
	el.classList.add('zumba');
	el.innerText = 'Zumba';
};
let si = function (el) {
	el.classList.add('sila-body');
	el.innerText = 'Силовой тренинг (Total body';
};
let pr = function (el) {
	el.classList.add('press');
	el.innerText = 'Пресс и ягодицы';
};
let ta = function (el) {
	el.classList.add('tabata');
	el.innerText = 'Табата';
};
let si_ka = function (el) {
	el.classList.add('sila-kardio');
	el.innerText = 'Сила и кардио';
};
let ka_si = function (el) {
	el.classList.add('kardio-sila');
	el.innerText = 'Кардио + сила';
};
let st_si = function (el) {
	el.classList.add('step');
	el.innerText = 'Степ + сила';
};
let trx_lu = function (el) {
	el.classList.add('trx-lu');
	el.innerText = 'TRX lunch break';
};
let trx_st = function (el) {
	el.classList.add('trx-st');
	el.innerText = 'TRX Start';
};
let trx_kr = function (el) {
	el.classList.add('trx-kr');
	el.innerText = 'TRX Круговая';
};
let trx_in = function (el) {
	el.classList.add('trx-in');
	el.innerText = 'TRX Interval';
};
/* ------------------ */


let qwer = function(el) {
	el.classList.add('all');
	el.style.backgroundColor = '#74ce5b';
	el.innerText = 'Привет';
}


// mo - Понедельник

qwer(mo8)
zd(mo9)
si(mo10)
st(mo11)
it(mo12)
trx_lu(mo13)
it(mo14)
it(mo15)
qwer(mo16)
trx_st(mo17)
si(mo18)
trx_in(mo19)
pi(mo20)
zu(mo21)

// tu - Вторник

si(tu8)
trx_in(tu9)
pr(tu10)
mm(tu11)
trx_lu(tu12)
qwer(tu13)
it(tu14)
it(tu15)
ka_si(tu16)
it(tu17)
zd(tu18)
pi(tu19)
st_si(tu20)
trx_kr(tu21)

// we - Среда

pi(we8)
po(we9)
pr(we10)
st(we11)
it(we12)
si(we13)
it(we14)
it(we15)
it(we16)
trx_st(we17)
pr(we18)
trx_in(we19)
si_pi(we20)
st(we21)

// th - Четверг

si(th8)
trx_in(th9)
pr(th10)
mm(th11)
trx_lu(th12)
zu(th13)
it(th14)
it(th15)
ka_si(th16)
zu(th17)
fi(th18)
pi_st(th19)
ka_si(th20)
trx_in(th21)

// fr - Пятница

pi_st(fr8)
fi(fr9)
si(fr10)
st(fr11)
it(fr12)
trx_lu(fr13)
it(fr14)
it(fr15)
zu(fr16)
trx_st(fr17)
pr(fr18)
trx_in(fr19)
pi(fr20)
st(fr21)

// sa - Суббота

it(sa8)
po(sa9)
st(sa10)
pi(sa11)
zu(sa12)
si(sa13)
trx_in(sa14)
sh(sa15)
si_pi(sa16)
mfr(sa17)

// su - Воскресенье

it(su8)
pr(su9)
pi(su10)
ta(su11)
si(su12)
trx_in(su13)
si_pi(su14)
st(su15)
zu(su16)
trx_st(su17)

//----------------