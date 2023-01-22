import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

export const useUserData = defineStore("UserData", {
  state: () => ({
    id: crypto.randomUUID(),
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
    submitted: "",

    username: "",
  }),
  actions: {
    async login(form) {
      try {
        const users = await fetch(`../../loginData.json`);
        // const user = users.forEach((element) => {

        // });
        console.log(users);
        const user = () => {
          for (let element of users) {
            if (
              (form.username == element.username ||
                form.username == element.email) &&
              form.password == element.password
            ) {
              return element;
            }
          }
        };
        if (!user) {
          return false;
        } else {
          this.username = user.username;
          return true;
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
});
