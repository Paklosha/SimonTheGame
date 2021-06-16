   <template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="left-side-container">
        <div class="form-group">
          <label class="title-one" for="name">Фамилия</label>
          <input
            type="text"
            v-model="userForm.firstName"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
          </div>
        </div>

        <div class="form-group">
          <label class="title-one" for="name">Имя</label>
          <input
            type="text"
            v-model="userForm.lastName"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
          </div>
        </div>

        <div class="form-group">
          <label for="name">Отчество</label>
          <input
            type="text"
            v-model="userForm.surname"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
          </div>
        </div>

        <div class="form-group">
          <label class="title-one" for="dateofbirth">Дата рождения</label><br />
          <input type="date" name="dateofbirth" id="dateofbirth" />
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
              >Mobile field is required</span
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
            <input type="checkbox" id="test1" />
            <label for="test1">VIP</label>
          </p>
          <p>
            <input type="checkbox" id="test2" />
            <label for="test2">Проблемные</label>
          </p>
          <p>
            <input type="checkbox" id="test3" />
            <label for="test3">ОМС</label>
          </p>
        </div>
        <hr />
        <div style="margin-top: 10px" class="form-group">
          <p>
            <input type="checkbox" id="test4" />
            <label for="test4">Не отправлять СМС</label>
          </p>
        </div>

        <!--             <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" v-model="userForm.confirmPassword" id="confirmPassword" name="confirmPassword"
                    class="form-control" :class="{ 'is-invalid': isSubmitted && $v.userForm.confirmPassword.$error }" />
                <div v-if="isSubmitted && $v.userForm.confirmPassword.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.confirmPassword.required">Confirm Password field is required</span>
                    <span v-else-if="!$v.userForm.confirmPassword.sameAsPassword">Passwords should be matched</span>
                </div>
            </div> -->

        <div class="form-group">
          <div class="text-box">
            <a href="#" class="btn btn-white btn- animate">Создать запись</a>
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
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
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
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
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
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
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
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
          </div>
        </div>

        <div class="form-group">
          <label for="name">Улица</label>
          <input
            type="text"
            v-model="userForm.street"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
          </div>
        </div>

        <div class="form-group">
          <label for="name">Дом</label>
          <input
            type="text"
            v-model="userForm.house"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
          </div>
        </div>

        <label class="chapter" style="margin-top: 10px" for="name"
          >Паспорт</label
        >
        <div class="form-group">
          <label class="title-one" for="password">Тип документа</label><br />
          <div class="select" style="margin-top: 10px">
            <select name="slct" id="slct">
              <option selected disabled>Выберите тип документа</option>
              <option value="1">Паспорт</option>
              <option value="2">Свидетельство о рождении</option>
              <option value="3">Вод. удостоверение</option>
            </select>
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
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
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
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
          </div>
        </div>

        <div class="form-group">
          <label for="name">Кем выдан</label>
          <input
            type="text"
            v-model="userForm.from"
            id="name"
            name="name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required
          </div>
        </div>

        <div class="form-group">
          <label class="title-one" for="dateofbirth">Дата выдачи</label><br />
          <input type="date" name="dateofbirth" id="dateofbirth" />
        </div>

                <div class="form-group">
          <div class="text-box">
            <a href="#" class="btn btn-white btn- animate">Создать запись</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      userForm: {
        name: "",
        email: "",
        mobile: "",
        gender: "",
        password: "",
        confirmPassword: "",
        accept: "",
      },
      isSubmitted: false,
    };
  },
  validations: {
    userForm: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      mobile: {
        required,
      },
      gender: {
        required,
      },
      password: {
        required,
        minLength: minLength(5),
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
      accept: {
        required(val) {
          return val;
        },
      },
    },
  },
  methods: {
    handleSubmit() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert("SUCCESS!" + JSON.stringify(this.userForm));
    },
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat);
input {
  margin-top: 8px;
}
#test1, #test2, #test3{
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
.select {
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
  color: black;
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
  }

.left-side-container {
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

.left-side-container .text-box{
  display: none;
}
.right-side-container .text-box {
    display: block !important;
      margin-top: 40px;
  margin-left: 33px;
  margin-bottom: 10px;
}
.chapter{
  
}


element.style {
    margin-top: 20px;
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



.text-box{
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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
</style>