import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUserData = defineStore("UserData", {
  state: () => ({
    firstName: "",
    secondName: "",
    thirdName: "",
    fourthName: "",
    firstNameAr: "",
    secondNameAr: "",
    thirdNameAr: "",
    fourthNameAr: "",
    dob: "",
    gender: "",
    resident: "",
    idType: "",
    idNumber: "",
    nationality: "",
    state: "",
    city: "",
    area: "",
    street: "",
    poBox: "",
    houseNumber: "",
    email: "",
    mobileNumber: "",
    branch: "",
    employersName: "",
    department: "",
    bArea: "",
    phoneNumber: "",
    bType: "",
    bSector: "",
    bTypeOther: "",
    bSectorOther: "",
    iwr: "",
    iwrOther: "",
    salary: "",
    mothersName: "",
    spouseName: "",
    maritalStatus: "",
    dateOfIssue: "",
    dateOfExpiry: "",
    cbosId: "",
    terms: "",
    terms2: "",
    atmCard: "",
    cheque: "",

    username: "",

  }),
  actions: {
    async login(form){
      try{
        const users = await fetch(`../../loginData.json`);
        // const user = users.forEach((element) => {
          
        // });

        const user = () => {
          for(let element of users){
            if((form.username == element.username || form.username == element.email) && form.password == element.password){
              return element;
            }
          }
        };
        if(!user){
          return false;
        }else{
          
        this.username = user.username;
        return true;
        }
      }catch(e){
        console.log(e);
        return false;
      }
    }
  },
});
