<script setup>
import {Field , Form,ErrorMessage} from 'vee-validate';
import PayloadAnimal from '@/services/PayloadAnimal';
import { reactive } from 'vue';

   function onSubmit(values){
      console.log(values,null,2);
        }
   function validateForm(value){
  
    if(!value){
      return ' This field is required';
    }
    return true;
   }

   const animal = reactive({
    name:"",
    date:"",
    country:"",
    type:"",
    gender:"",
    family:""
   });

  function send(){

    let animalUpdate = new PayloadAnimal();
      animal.name,
      animal.date,
      animal.country,
      animal.type,
      animal.gender,
      animal.family
    console.log(animalUpdate);
   }



</script>



<template>
  <div class="main">
    <Form @submit="send" class="form__wrapper">
      <div class="form__img">
        <img src="../assets/img/img-form.jpg" alt="photo-form" />
      </div>
      <div class="form__container">
        <div class="form__title">
          <h1>NEW FORM ANIMAL</h1>
        </div>
        <div class="form__fields">
          <div class="form__group">
            <Field type="text" class="form__input" placeholder="Name" name="name" v-model="animal.name" :rules="validateForm"/>
            <ErrorMessage id="error" name="name" />
            <span class="form__line"></span>
          </div>
          <div class="form__group">
            <Field type="text" class="form__input" placeholder="Type" v-model="animal.type" name="type"/>
            <span class="form__line"></span>
          </div>
          <div class="form__group">
            <Field type="text" class="form__input" placeholder="Family" v-model="animal.family" name="family"/>
            <span class="form__line"></span>
          </div>
          <div class="form__group">
            <Field type="text" class="form__input" placeholder="Gender" v-model="animal.gender" name="gender"/>
            <span class="form__line"></span>
          </div>
          <div class="form__group">
            <Field type="text" class="form__input" placeholder="Date" v-model="animal.date" name="date"/>
            <span class="form__line"></span>
          </div>
          <div class="form__group">
            <Field type="text" class="form__input" placeholder="country" v-model="animal.country" name="country"/>
            <span class="form__line"></span>
          </div>
        </div>
        <button type="submit" class="form_btn" value="send">SEND</button>
      </div>
    </Form>
  </div>
</template>

<style lang="scss" scoped>
@use "@/sass/mixins" as m;

.main{
  @include m.flex(grid,auto,auto,center,center);
  width: 100%;
  height: 100%;
  // grid-template-columns: 1fr 1fr;
  // background-color: blue;

  .form__wrapper{
    display: flex;
    //  background-color: red;
     justify-content: center;
     align-items: flex-start;
     border-style: solid;
     width: auto;
     height: 0 auto;
     overflow: hidden;
    //  height: auto;
     .form__img{
      //  background-color: bisque;
      height: 35vh;
       img{
         height:auto;
       }
       
      }
      .form__container{
        // background-color: aqua;
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 50%;
        height: 70%;
 
 
        
        
        .form__title{
          font-size: 12px;
          display: flex;
          justify-content: center;
          margin-top: 4rem;
  
          h1{
            color:black;
            display: flex;
          }
        }

        .form__fields{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // background-color: yellow;
           

          #error{
            color:red;
            font-size: 1em;
          }

          .form__group{
            position: relative;
            
          }

          .form__input{
            background: transparent;
            font-size: 1.3em;
            border: none;
            margin: 0.5em 2rem;
            outline: none;
            padding: 0.9em 3em;
            border-bottom: 1px solid #5757577e;
            color: black;
            font-family: "Courier New", Courier, monospace;
          }

        }

        .form_btn{
          display: flex;
          justify-content: center;
          background: rgb(238, 90, 90);
          border: none;
          font-weight: 300;
          font-size: 1.4rem;
          margin:1.3em 2em;
          padding: 0.9em;

          
        }
    }
  }
}
</style>

    
  
  
  
  
  
      
       

      



  


  





