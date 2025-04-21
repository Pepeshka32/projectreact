import React from "react";

export function Reg() {
    const [state, setState] = React.useState({ name: '', age: 0, nameValid: false, ageValid: false });

    function validateAge(age) {
        return age > 0;
    }
    function validateName(name) {
        return name.length > 2;
    }

    function onAgeChange(e) {
        var val = e.target.value;
        var valid = val > 2 ? true : false;
        setState({ name: state.name, nameValid: state.nameValid, age: val, ageValid: valid });
    }
    function onNameChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = validateName(val);
        setState({ name: val, nameValid: valid, age: state.age, ageValid: state.ageValid });
    }
    function handleSubmit(e) {

        if (state.nameValid === true && state.ageValid === true) {
            alert(`Имя: ${state.name} Возраст: ${state.age}`);
        }
        else {
            e.preventDefault();
        }
    }
    var agevalid = state.ageValid === true ? "valid" : "invalid";
    var namevalid = state.nameValid === true ? "valid" : "invalid";

    return (
        <div className="Regcontainer">
            <div className="Regleft-side">
                <button className="back-button">&#9664;</button>
                <h2 className="pnav">ЗАПОВНІТЬ ВХІД ДО ОБЛІКОВОГО ЗАПИСУ</h2>

            </div>

            <div className="Regright-side">
                <form onSubmit={handleSubmit} className="login-form">
                    <p>
                        <label>Пароль:</label><br />
                        <input  type="text" value={state.name} placeholder="Введіть пароль" onChange={onNameChange} className={namevalid} />
                    </p>
                    <a href="#" className="forgot-password">Забули свій пароль?</a>



                    <p>
                        <label>Email:</label><br />
                        <input type="text" value={state.name} placeholder="Введіть email або номер"
                            onChange={onAgeChange} className={agevalid} />
                    </p>



         <p>
            <label>Id пользователя:</label><br />
            <input type="text" value={state.age}
                onChange={onAgeChange} className={agevalid} />
        </p>

        <p>
            <label>Имя:</label><br />
            <input type="text" value={state.name} onChange={onNameChange} className={namevalid} />
        </p>

        <p>
            <label>Адресс:</label><br />
            <input type="text" value={state.name} onChange={onNameChange} className={namevalid} />
        </p>

        <p>
            <label>Страна:</label>
            <select value={state.age} onChange={onAgeChange} className={agevalid}>
                <option value="australia">Австралия</option>
                <option value="austria">Австрия</option>
                <option value="azerbaijan">Азербайджан</option>
                <option value="albania">Албания</option>
                <option value="algeria">Алжир</option>
                <option value="angola">Ангола</option>
                <option value="andorra">Андорра</option>
                <option value="antigua_barbuda">Антигуа и Барбуда</option>
                <option value="argentina">Аргентина</option>
                <option value="armenia">Армения</option>
                <option value="afghanistan">Афганистан</option>
                <option value="bahamas">Багамы</option>
                <option value="bangladesh">Бангладеш</option>
                <option value="barbados">Барбадос</option>
                <option value="bahrain">Бахрейн</option>
                <option value="belize">Белиз</option>
                <option value="belarus">Беларусь</option>
                <option value="belgium">Бельгия</option>
                <option value="benin">Бенин</option>
                <option value="bulgaria">Болгария</option>
                <option value="bolivia">Боливия</option>
                <option value="bosnia_herzegovina">Босния и Герцеговина</option>
                <option value="botswana">Ботсвана</option>
                <option value="brazil">Бразилия</option>
                <option value="brunei">Бруней</option>
                <option value="burkina_faso">Буркина-Фасо</option>
                <option value="burundi">Бурунди</option>
                <option value="bhutan">Бутан</option>
                <option value="vanuatu">Вануату</option>
                <option value="vatican">Ватикан</option>
                <option value="uk">Великобритания</option>
                <option value="hungary">Венгрия</option>
                <option value="venezuela">Венесуэла</option>
                <option value="timor_leste">Восточный Тимор</option>
                <option value="vietnam">Вьетнам</option>
                <option value="gabon">Габон</option>
                <option value="haiti">Гаити</option>
                <option value="guyana">Гайана</option>
                <option value="gambia">Гамбия</option>
                <option value="ghana">Гана</option>
                <option value="guatemala">Гватемала</option>
                <option value="guinea">Гвинея</option>
                <option value="guinea_bissau">Гвинея-Бисау</option>
                <option value="germany">Германия</option>
                <option value="honduras">Гондурас</option>
                <option value="grenada">Гренада</option>
                <option value="greece">Греция</option>
                <option value="georgia">Грузия</option>
                <option value="denmark">Дания</option>
                <option value="djibouti">Джибути</option>
                <option value="dominica">Доминика</option>
                <option value="dominican_republic">Доминиканская Республика</option>
                <option value="egypt">Египет</option>
                <option value="zambia">Замбия</option>
                <option value="zimbabwe">Зимбабве</option>
                <option value="israel">Израиль</option>
                <option value="india">Индия</option>
                <option value="indonesia">Индонезия</option>
                <option value="jordan">Иордания</option>
                <option value="iraq">Ирак</option>
                <option value="iran">Иран</option>
                <option value="ireland">Ирландия</option>
                <option value="iceland">Исландия</option>
                <option value="spain">Испания</option>
                <option value="italy">Италия</option>
                <option value="kazakhstan">Казахстан</option>
                <option value="cambodia">Камбоджа</option>
                <option value="cameroon">Камерун</option>
                <option value="canada">Канада</option>
                <option value="qatar">Катар</option>
                <option value="kenya">Кения</option>
                <option value="cyprus">Кипр</option>
                <option value="kyrgyzstan">Киргизия</option>
                <option value="kiribati">Кирибати</option>
                <option value="china">Китай</option>
                <option value="colombia">Колумбия</option>
                <option value="comoros">Коморы</option>
                <option value="congo_dr">Конго (ДРК)</option>
                <option value="congo">Конго (Республика)</option>
                <option value="costa_rica">Коста-Рика</option>
                <option value="ivory_coast">Кот-д’Ивуар</option>
                <option value="cuba">Куба</option>
                <option value="turkey">Турция</option>
                <option value="kuwait">Кувейт</option>
                <option value="laos">Лаос</option>
                <option value="latvia">Латвия</option>
                <option value="lesotho">Лесото</option>
                <option value="liberia">Либерия</option>
                <option value="lebanon">Ливан</option>
                <option value="libya">Ливия</option>
                <option value="lithuania">Литва</option>
                <option value="liechtenstein">Лихтенштейн</option>
                <option value="luxembourg">Люксембург</option>
                <option value="madagascar">Мадагаскар</option>
                <option value="malawi">Малави</option>
                <option value="malaysia">Малайзия</option>
                <option value="mali">Мали</option>
                <option value="maldives">Мальдивы</option>
                <option value="malta">Мальта</option>
                <option value="morocco">Марокко</option>
                <option value="mexico">Мексика</option>
                <option value="moldova">Молдова</option>
                <option value="monaco">Монако</option>
                <option value="mongolia">Монголия</option>
                <option value="myanmar">Мьянма</option>
                <option value="namibia">Намибия</option>
                <option value="nepal">Непал</option>
                <option value="niger">Нигер</option>
                <option value="nigeria">Нигерия</option>
                <option value="netherlands">Нидерланды</option>
                <option value="norway">Норвегия</option>
                <option value="uae">ОАЭ</option>
                <option value="oman">Оман</option>
                <option value="pakistan">Пакистан</option>
                <option value="panama">Панама</option>
                <option value="paraguay">Парагвай</option>
                <option value="peru">Перу</option>
                <option value="poland">Польша</option>
                <option value="portugal">Португалия</option>
                <option value="russia">Россия</option>
                <option value="romania">Румыния</option>
                <option value="usa">США</option>
                <option value="thailand">Таиланд</option>
                <option value="tunisia">Тунис</option>
                <option value="turkey">Турция</option>
                <option value="ukraine">Украина</option>
                <option value="uzbekistan">Узбекистан</option>
                <option value="france">Франция</option>
                <option value="croatia">Хорватия</option>
                <option value="czech">Чехия</option>
                <option value="switzerland">Швейцария</option>
                <option value="sweden">Швеция</option>
                <option value="japan">Япония</option>

            </select>
            <br />
        </p>

        <p>
            <label>Возраст:</label><br />
            <input type="number" value={state.age}
                onChange={onAgeChange} className={agevalid} />
        </p>

        <p>
            <label>ZIP код:</label><br />
            <input type="text" value={state.name} onChange={onNameChange} className={namevalid} />
        </p>


        <p>
            <label>Пол:</label>
            <select value={state.age} onChange={onAgeChange} className={agevalid}>
                <option value="australia">мужской</option>
                <option value="austria">Жен</option>
                <option value="azerbaijan">Другой</option>
                <option value="azerbaijan">круасан</option>


            </select>
            <br />
        </p>

        <p>
            <label>Знаю английский:</label><br />

            <input type="checkbox" value="1" />
        </p>

        <p>
            <label>Не знаю английский:</label><br />

            <input type="checkbox" value="1" />
        </p>
        <p>
            <label>Про себя:</label><br />

            <textarea value='сюда пиши'></textarea>
        </p>
        <input type="submit" value="Отправить" /> 
 
        <div className="checkbox-container">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Зберегти інформацію</label>
                    </div>
                    <button type="submit" className="submit-btn">ПРОДОВЖИТИ</button>
                    <p className="preg">У вас ще немає облікового запису?</p>
                   <button className="register-btn">СТВОРИТИ АККАУНТ</button>

        </form>
            </div>

        </div>

    );
}