   <template>
  <div class="container">
    <div v-if="isSuccess" class="alert alert-success alert-white rounded">
      <button
        type="button"
        @click="closeAlert"
        class="close"
        data-dismiss="alert"
        aria-hidden="true"
      >
        ×
      </button>
      <div class="icon"></div>
      <strong>Успех!</strong> Клиент был успешно создан!
    </div>
    <form @submit.prevent="handleSubmit" ref="form">
      <div class="left-side-container">
        <div class="form-group">
          <label class="title-one" for="name">Фамилия</label>
          <input
            type="text"
            v-model="userForm.firstname"
            id="name"
            name="name"
            class="form-control"
            :class="{
              'is-invalid': isSubmitted && $v.userForm.firstname.$error,
            }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.firstname.required"
            class="invalid-feedback"
          >
            Поле должно быть заполнено
          </div>
          <div
            v-if="isSubmitted && !$v.userForm.firstname.val2"
            class="invalid-feedback"
          >
            Разрешено использовать только кириллицу
          </div>
        </div>

        <div class="form-group">
          <label class="title-one" for="name">Имя</label>
          <input
            type="text"
            v-model="userForm.lastname"
            id="name"
            name="name"
            class="form-control"
            :class="{
              'is-invalid': isSubmitted && $v.userForm.lastname.$error,
            }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.lastname.required"
            class="invalid-feedback"
          >
            Поле должно быть заполнено
          </div>
          <div
            v-if="isSubmitted && !$v.userForm.lastname.val2"
            class="invalid-feedback"
          >
            Разрешено использовать только кириллицу
          </div>
        </div>

        <div class="form-group">
          <label for="name">Отчество</label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.surname.$error }"
            v-model="userForm.surname"
          />

          <div
            v-if="isSubmitted && !$v.userForm.surname.val2"
            class="invalid-feedback"
          >
            Разрешено использовать только кириллицу
          </div>
        </div>

        <div class="form-group">
          <label class="title-one" for="dateofbirth">Дата рождения</label><br />
          <input
            type="date"
            name="dateofbirth"
            id="dateofbirth"
            :class="{
              'is-invalid': isSubmitted && $v.userForm.birthday.$error,
            }"
            v-model="userForm.birthday"
          />

          <div
            v-if="isSubmitted && !$v.userForm.birthday.required"
            class="invalid-feedback"
          >
            Введите дату рождения
          </div>
        </div>

        <div class="form-group">
          <label class="title-one" for="mobile">Номер телефона</label>
          <input
            type="text"
            v-model="userForm.mobile"
            id="mobile"
            name="mobile"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.mobile.$error }"
          />
          <div
            v-if="isSubmitted && $v.userForm.mobile.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.userForm.mobile.required"
              >Введите номер телефона</span
            >
            <span v-if="!$v.userForm.mobile.val3"
              >Состоит из 11 цифр, начинается с 7</span
            >
          </div>
        </div>

        <div class="form-group">
          <label for="name">Пол</label>
          <ul class="tab">
            <li>
              <input id="tab1" checked="checked" type="radio" name="tab" />
              <label for="tab1">Мужской</label>
            </li>
            <li>
              <input id="tab2" type="radio" name="tab" />
              <label for="tab2">Женский</label>
            </li>
          </ul>
        </div>

        <div class="form-group">
          <label>Лечащий врач</label><br />

          <div class="select" style="margin-top: 10px">
            <select name="slct" id="slct">
              <option selected disabled>Выберите лечащего врача</option>
              <option value="1">Иванов</option>
              <option value="2">Захаров</option>
              <option value="3">Чернышева</option>
            </select>
          </div>
        </div>

        <div style="margin-top: 10px" class="form-group">
          <label class="title-one">Группа клиентов</label><br />

          <p>
            <input type="checkbox" id="test1" ref="test1" />
            <label for="test1">VIP</label>
          </p>
          <p>
            <input type="checkbox" id="test2" ref="test2" />
            <label for="test2">Проблемные</label>
          </p>
          <p>
            <input type="checkbox" id="test3" ref="test3" />
            <label for="test3">ОМС</label>
          </p>

          <div v-if="isUncheck" class="invalid-feedback">
            Нужно выбрать хотя бы один вариант
          </div>
        </div>
        <hr />
        <div style="margin-top: 10px" class="form-group">
          <p>
            <input type="checkbox" id="test4" />
            <label for="test4">Не отправлять СМС</label>
          </p>
        </div>

        <div class="form-group">
          <div class="text-box">
            <a href="#" @click="submit" class="btn btn-white btn- animate"
              >Создать запись</a
            >
          </div>
        </div>
      </div>
      <div class="right-side-container">
        <label class="chapter" for="name">Адрес</label>
        <div class="form-group">
          <label for="name">Индекс</label>
          <input
            type="text"
            v-model="userForm.index"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.index.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.index.val1"
            class="invalid-feedback"
          >
            Индекс состоит из 6 цифр
          </div>
        </div>

        <div class="form-group">
          <label for="name">Страна</label>
          <input
            type="text"
            v-model="userForm.country"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.country.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.country.val2"
            class="invalid-feedback"
          >
            Разрешено использовать только кириллицу
          </div>
        </div>

        <div class="form-group">
          <label for="name">Область</label>
          <input
            type="text"
            v-model="userForm.region"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.region.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.region.val2"
            class="invalid-feedback"
          >
            Разрешено использовать только кириллицу
          </div>
        </div>

        <div class="form-group">
          <label class="title-one" for="name">Город</label>
          <input
            type="text"
            v-model="userForm.city"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.city.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.city.required"
            class="invalid-feedback"
          >
            Поле должно быть заполнено
          </div>

          <div
            v-if="isSubmitted && !$v.userForm.city.val2"
            class="invalid-feedback"
          >
            Разрешено использовать только кириллицу
          </div>
        </div>

        <div class="form-group">
          <label for="name">Улица</label>
          <input type="text" id="name" name="name" class="form-control" />
        </div>

        <div class="form-group">
          <label for="name">Дом</label>
          <input type="text" id="name" name="name" class="form-control" />
        </div>

        <label class="chapter" style="margin-top: 10px" for="name"
          >Паспорт</label
        >
        <div class="form-group">
          <label class="title-one">Тип документа</label><br />
          <div class="select" style="margin-top: 10px; margin-bottom: 10px">
            <select
              :class="{
                'is-invalid': isSubmitted && $v.userForm.doctype.$error,
              }"
              v-model="userForm.doctype"
              name="slct"
              id="slct"
            >
              <option selected disabled>Выберите тип документа</option>
              <option value="1">Паспорт</option>
              <option value="2">Свидетельство о рождении</option>
              <option value="3">Вод. удостоверение</option>
            </select>
          </div>

          <div
            v-if="isSubmitted && !$v.userForm.doctype.required"
            class="invalid-feedback"
          >
            Выберите тип документа
          </div>
        </div>

        <div class="form-group" style="margin-top: 10px">
          <label for="name">Серия</label>
          <input
            type="text"
            v-model="userForm.seria"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.seria.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.seria.val4"
            class="invalid-feedback"
          >
            Серия состоит из 4 цифр
          </div>
        </div>

        <div class="form-group">
          <label for="name">Номер</label>
          <input
            type="text"
            v-model="userForm.housenum"
            id="name"
            name="name"
            class="form-control"
            :class="{
              'is-invalid': isSubmitted && $v.userForm.housenum.$error,
            }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.housenum.val1"
            class="invalid-feedback"
          >
            Номер состоит из 6 цифр
          </div>
        </div>

        <div class="form-group">
          <label for="name">Кем выдан</label>
          <input type="text" id="name" name="name" class="form-control" />
        </div>

        <div class="form-group">
          <label class="title-one" for="dateofbirth">Дата выдачи</label><br />
          <input
            type="date"
            name="dateofbirth"
            id="dateofbirth"
            :class="{
              'is-invalid': isSubmitted && $v.userForm.gettingday.$error,
            }"
            v-model="userForm.gettingday"
          />

          <div
            v-if="isSubmitted && !$v.userForm.gettingday.required"
            class="invalid-feedback"
          >
            Введите дату выдачи документа
          </div>
        </div>

        <div class="form-group">
          <div class="text-box">
            <a href="#" @click="submit" class="btn btn-white btn- animate"
              >Создать запись</a
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, helpers } from "vuelidate/lib/validators";

const val1 = helpers.regex("val1", /(?<!\d)\d{6}(?!\d)/);
const val2 = helpers.regex("val1", /^[ЁёА-я]+$/);
const val3 = helpers.regex("val1", /^7[0-9]{10}$/);
const val4 = helpers.regex("val1", /(?<!\d)\d{4}(?!\d)/);

export default {
  data() {
    return {
      userForm: {
        firstname: "",
        lastname: "",
        surname: "",
        mobile: "",
        index: "",
        country: "",
        city: "",
        region: "",
        seria: "",
        housenum: "",
        doctype: "",
        birthday: "",
        gettingday: "",
      },
      isSubmitted: false,
      isUncheck: false,
      isSuccess: false,
    };
  },
  validations: {
    userForm: {
      firstname: {
        required,
        val2,
      },
      lastname: {
        required,
        val2,
      },
      surname: {
        val2,
      },
      mobile: {
        required,
        val3,
      },
      index: {
        val1,
      },
      country: {
        val2,
      },
      city: {
        required,
        val2,
      },
      region: {
        val2,
      },
      seria: {
        val4,
      },
      housenum: {
        val1,
      },
      doctype: {
        required,
      },
      birthday: {
        required,
      },
      gettingday: {
        required,
      },
    },
  },
  methods: {
    submit() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (
        !(
          this.$refs.test1.checked ||
          this.$refs.test2.checked ||
          this.$refs.test3.checked
        )
      ) {
        this.isUncheck = true;
        return;
      } else this.isUncheck = false;

      if (this.$v.$invalid) return;
      this.isSuccess = true;
    },
    closeAlert() {
      this.isSuccess = !this.isSuccess;
    },
  },
};
</script>

<style lang="scss">
$btnshadow-color: rgba(0, 0, 0, 0.2);
$alertshadow-color: rgba(0, 0, 0, 0.11);
input {
  margin-top: 8px;
  margin-bottom: 10px;
}
.invalid-feedback {
  position: relative;
  margin-top: -11px;
  color: #ff4136;
  font-weight: 600;
  font-size: 13px;
}
#test1,
#test2,
#test3 {
  width: 30%;
}
.container {
  margin: 0 auto;
  max-width: 860px;
  text-align: left;
  font-family: montserrat, arial, verdana;
}
.title-one {
  font-size: 17px;
  font-weight: 600;
}
.title-two {
  font-weight: 300;
}
.chapter {
  font-size: 17px;
  font-weight: 600;
  display: inline-flex;
  margin-bottom: 10px;
  margin-left: 40%;
}
.left-side-container {
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
}
.right-side-container {
  padding-left: 10px;
  margin-left: 15px;
  padding-left: 15px;
  width: 100%;
  max-width: 400px;
  border-left: rgb(169, 178, 192) 2px solid;
}
form {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 0 15px 1px RGB(0 0 0 / 40%);
}
input {
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px 5px;
  line-height: 10px;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 20px;
}
input[type="date"] {
  width: 50%;
  font-size: 0.9rem;
}
/* Gender switch*/

ul.tab {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
ul.tab li {
  float: left;
  padding: 0;
}
ul.tab li label {
  background: white;
  padding: 6px;
  border: 1px solid #ccc;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
}
ul.tab li input[type="radio"] {
  opacity: 0;
  width: 1px;
  height: 1px;
}
ul.tab li input[type="radio"]:checked ~ label {
  background: #798ea4;
  color: white;
}
.left-side-container .form-group:nth-child(6) {
  margin-bottom: 60px;
}
/* Reset Select */
select {
  font-size: 17px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: #ccc 1px solid;
  background: white;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
option {
  color: black;
}
.select {
  color: white;
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: black;
  overflow: hidden;
  border-radius: 0.25em;
}
select {
  flex: 1;
  padding: 0 0.5em;
  color: white;
  cursor: pointer;
}
/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #dcdcdc;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
}
/* Transition */
.select:hover::after {
  color: rgb(211, 209, 209);
}
@media only screen and (max-width: 800px) {
  form {
    flex-direction: column;
    max-width: 300px;
    margin: auto;
  }
  .left-side-container {
    margin: auto;
    margin-bottom: 30px;
    width: 100%;
    max-width: 400px;
    margin-top: 0px;
  }
  .right-side-container {
    padding-left: 0px;
    margin-left: 0px;
    padding-left: 0px;
    width: 100%;
    max-width: 400px;
    border-left: none;
  }
  .left-side-container {
    .text-box {
      display: none;
    }
  }

  .right-side-container {
    .text-box {
      display: block !important;
      margin-top: 40px;
      margin-left: 33px;
      margin-bottom: 10px;
    }
  }

  element.style {
    margin-top: 20px;
  }
  .select {
    width: 15em;
  }
}
/* Base for label styling */

[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: 0;
  opacity: 0.01;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 2.3em;
  font-size: 1.05em;
  line-height: 1.7;
  cursor: pointer;
}
/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.4em;
  height: 1.4em;
  border: 1px solid #aaa;
  background: #fff;
  border-radius: 0.2em;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 rgba(220, 216, 221, 0.2);
  -webkit-transition: all 0.275s;
  transition: all 0.275s;
}
/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "✕";
  position: absolute;
  top: 0.525em;
  left: 0.18em;
  font-size: 1.375em;
  color: black;
  line-height: 0;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0) rotate(45deg);
  transform: scale(0) rotate(45deg);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1) rotate(0);
  transform: scale(1) rotate(0);
}
/* Disabled checkbox */
[type="checkbox"]:disabled:not(:checked) + label:before,
[type="checkbox"]:disabled:checked + label:before {
  box-shadow: none;
  border-color: #bbb;
  background-color: #e9e9e9;
}
[type="checkbox"]:disabled:checked + label:after {
  color: #777;
}
[type="checkbox"]:disabled + label {
  color: #aaa;
}
/* Accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 0 6px rgba(129, 127, 129, 0.2);
}
.text-box {
  margin-top: 40px;
  margin-left: 50px;
}
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
}
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px $btnshadow-color;
}
.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px $btnshadow-color;
}
.btn-white {
  background-color: #fff;
  color: black;
  border: 1px solid black;
}
.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}
.btn-white::after {
  background-color: #fff;
  display: none;
}
.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}
.btn-animated {
  animation: moveInBottom 5s ease-out;
  animation-fill-mode: backwards;
}
.right-side-container .text-box {
  display: none;
}
@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

/* Alert of success */

.close {
  float: right;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;
}

button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}

.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert h4 {
  margin-top: 0;
  color: inherit;
}

.alert .alert-link {
  font-weight: bold;
}

.alert > p,
.alert > ul {
  margin-bottom: 0;
}

.alert > p + p {
  margin-top: 5px;
}

.alert-dismissable {
  padding-right: 35px;
}

.alert-dismissable .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}

.alert-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
}

.alert-success hr {
  border-top-color: #c9e2b3;
}

.alert-success .alert-link {
  color: #2b542c;
}

.alert {
  border-radius: 0;
  -webkit-border-radius: 0;
  box-shadow: 0 1px 2px $alertshadow-color;
}

.alert .sign {
  font-size: 20px;
  vertical-align: middle;
  margin-right: 5px;
  text-align: center;
  width: 25px;
  display: inline-block;
}

.alert-success {
  background-color: #dbf6d3;
  border-color: #aed4a5;
  color: #569745;
}

.alert-white {
  background-image: linear-gradient(to bottom, #ffffff, #f9f9f9);
  border-top-color: #d8d8d8;
  border-bottom-color: #bdbdbd;
  border-left-color: #cacaca;
  border-right-color: #cacaca;
  color: #404040;
  padding-left: 61px;
  position: relative;
}

.alert-white .icon {
  text-align: center;
  width: 45px;
  height: 100%;
  position: absolute;
  top: -1px;
  left: -1px;
  border: 1px solid #bdbdbd;
}

.alert-white {
  .icon:after {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    border: 1px solid #bdbdbd;
    position: absolute;
    border-left: 0;
    border-bottom: 0;
    top: 50%;
    right: -6px;
    margin-top: -5px;
    background: #fff;
  }
}
.alert-white.rounded {
  border-radius: 3px;
  -webkit-border-radius: 3px;
}

.alert-white.rounded {
  .icon {
    border-radius: 3px 0 0 3px;
    -webkit-border-radius: 3px 0 0 3px;
  }
}

.alert-white {
  .icon i {
    font-size: 20px;
    color: #fff;
    left: 12px;
    margin-top: -10px;
    position: absolute;
    top: 50%;
  }
}

.alert-white.alert-success .icon,
.alert-white.alert-success .icon:after {
  border-color: #54a754;
  background: #60c060;
}
</style>