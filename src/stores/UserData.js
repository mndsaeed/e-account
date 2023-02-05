import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axios from "axios";
import { mdiConsoleNetwork } from "@mdi/js";
const baseUrl = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL = baseUrl;
export const useUserData = defineStore("UserData", {
  state: () => ({
    id: "",
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
    accountType: "",

    username: "",
    pageNumber: "",
    pageUrl: "",
    submitDate: "",
    personalPhoto: ref(),
    idPhoto: ref(),
    selfieHoldingId: ref(),
    images: {},
    personalCheck: ref("Click to upload"),
    idCheck: ref("Click to upload"),
    selfieCheck: ref("Click to upload"),
    fileToo: false,
    fileFormat: false,
  }),

  actions: {
    async signup() {
      try {
        const newUser = await axios.post("/signup", {
          username: this.email,
        });

        const id = newUser.data.body.account_info_id;
        localStorage.setItem("id", id);
        if (newUser.data.code == 0) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
      }
    },

    async signIn() {
      try {
        const User = await axios.post("/signin", {
          username: this.email,
        });
        this.pageUrl = User.data.body.account_info_from.pageUrl;
        const id = User.data.body.account_id;
        localStorage.setItem("id", id);
        if (User.data.code == 0) {
          this.submitted = User.data.body.account_info_from.submitted;
          this.submitDate = User.data.body.account_info_from.submitDate;
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
      }
    },
    async saveForm() {
      try {
        const id = localStorage.getItem("id");

        const form = await axios.put("/account-info/" + id, {
          firstNameEN: this.firstName,
          secondNameEN: this.secondName,
          thirdNameEN: this.thirdName,
          fourthNameEN: this.fourthName,
          firstNameAr: this.firstNameAr,
          secondNameAr: this.secondNameAr,
          thirdNameAr: this.thirdNameAr,
          fourthNameAr: this.fourthNameAr,
          dateOfBirth: this.dob,
          gender: this.gender,
          resident: this.resident,
          identityType: this.idType,
          identityNumber: this.idNumber,
          nationality: this.nationality,
          state: this.state,
          city: this.city,
          area: this.area,
          street: this.street,
          poBox: this.poBox,
          houseNumber: this.houseNumber,
          username: this.email,
          mobileNumber: this.mobileNumber,
          branch: this.branch,
          employersName: this.employersName,
          department: this.department,
          bArea: this.bArea,
          phoneNumber: this.phoneNumber,
          bType: this.bType,
          bSector: this.bSector,
          bTypeOther: this.bTypeOther,
          bSectorOther: this.bSectorOther,
          iwr: this.iwr,
          iwrOther: this.iwrOther,
          salary: this.salary,
          mothersName: this.mothersName,
          spouseName: this.spouseName,
          maritalStatus: this.maritalStatus,
          issuanceDate: this.dateOfIssue,
          dateOfExpiry: this.dateOfExpiry,
          cbosId: this.cbosId,
          terms: this.terms,
          terms2: this.terms2,
          atmCard: this.atmCard,
          cheque: this.cheque,
          pageUrl: this.pageUrl,
          submitDate: this.submitDate,
          accountType: this.accountType,
        });
        if (form.data.code == 0) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
      }
    },
    async upload(image, description) {
      const id = localStorage.getItem("id");
      const data = { userId: id, type: "photo", description: description };
      const formImage = new FormData();
      const theImage = image;
      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      formImage.append("image", theImage);
      formImage.append("data", blob);
      try {
        if (id == null) {
          return false;
        }
        const documents = await axios.post(
          "/documents/newDocument",
          formImage,
          {
            Headers: {
              "content-type": "multipart/form-data",
            },
          }
        );
        if (description == "personalPhoto") {
          if (documents.data.code == -600) {
            console.log("File too large");
            this.fileToo = true;
            console.log(this.fileToo);
          }
          if (documents.data.code == -601) {
            console.log("File wrong format");
            this.fileFormat = true;
          }
          if (documents.data.code == 0) {
            this.fileFormat = false;
            this.fileToo = false;
            return true;
          }
        }
        if (description == "idPhoto") {
          if (documents.data.code == -600) {
            console.log("File too large");
            this.fileToo = true;
          }
          if (documents.data.code == -601) {
            console.log("File wrong format");
            this.fileFormat = true;
          }
          if (documents.data.code == 0) {
            this.fileFormat = false;
            this.fileToo = false;
            return true;
          }
        }
        if (description == "selfieHoldingId") {
          if (documents.data.code == -600) {
            console.log("File too large");
            this.fileToo = true;
          }
          if (documents.data.code == -601) {
            console.log("File wrong format");
            this.fileFormat = true;
          }
          if (documents.data.code == 0) {
            this.fileFormat = false;
            this.fileToo = false;
            return true;
          }
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    async download() {
      const id = localStorage.getItem("id");
      try {
        const form = await axios.get("/documents/user/" + id, {});
        this.images = form.data.body;
        const imageObj = this.images;
        const iterator = imageObj.values();
        for (const value of iterator) {
          if (value.description == "personalPhoto") {
            this.personalCheck = value.description;
            this.personalPhoto = value.file;
            console.log(this.personalCheck);
          }
          if (value.description == "idPhoto") {
            this.idCheck = value.description;
            this.idPhoto = value.file;
            console.log(this.idCheck);
          }
          if (value.description == "selfieHoldingId") {
            this.selfieCheck = value.description;
            this.selfieHoldingId = value.file;
            console.log(this.selfieCheck);
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    async submitForm() {
      try {
        const id = localStorage.getItem("id");

        const form = await axios.post("/account-info/" + id, {
          firstNameEN: this.firstName,
          secondNameEN: this.secondName,
          thirdNameEN: this.thirdName,
          fourthNameEN: this.fourthName,
          firstNameAr: this.firstNameAr,
          secondNameAr: this.secondNameAr,
          thirdNameAr: this.thirdNameAr,
          fourthNameAr: this.fourthNameAr,
          dateOfBirth: this.dob,
          gender: this.gender,
          resident: this.resident,
          identityType: this.idType,
          identityNumber: this.idNumber,
          nationality: this.nationality,
          state: this.state,
          city: this.city,
          area: this.area,
          street: this.street,
          poBox: this.poBox,
          houseNumber: this.houseNumber,
          email: this.email,
          mobileNumber: this.mobileNumber,
          branch: this.branch,
          employersName: this.employersName,
          department: this.department,
          bArea: this.bArea,
          phoneNumber: this.phoneNumber,
          bType: this.bType,
          bSector: this.bSector,
          bTypeOther: this.bTypeOther,
          bSectorOther: this.bSectorOther,
          iwr: this.iwr,
          iwrOther: this.iwrOther,
          salary: this.salary,
          mothersName: this.mothersName,
          spouseName: this.spouseName,
          maritalStatus: this.maritalStatus,
          issuanceDate: this.dateOfIssue,
          dateOfExpiry: this.dateOfExpiry,
          cbosId: this.cbosId,
          terms: this.terms,
          terms2: this.terms2,
          atmCard: this.atmCard,
          cheque: this.cheque,
          submitDate: this.submitDate,
          accountType: this.accountType,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async loadForm() {
      try {
        const id = localStorage.getItem("id");

        const form = await axios.get("/account-info/" + id);
        this.firstName = form.data.body.firstNameEN;
        this.secondName = form.data.body.secondNameEN;
        this.thirdName = form.data.body.thirdNameEN;
        this.fourthName = form.data.body.fourthNameEN;
        this.firstNameAr = form.data.body.firstNameAr;
        this.secondNameAr = form.data.body.secondNameAr;
        this.thirdNameAr = form.data.body.thirdNameAr;
        this.fourthNameAr = form.data.body.fourthNameAr;
        this.dob = form.data.body.dateOfBirth;
        this.gender = form.data.body.gender;
        this.resident = form.data.body.resident;
        this.idType = form.data.body.identityType;
        this.idNumber = form.data.body.identityNumber;
        this.nationality = form.data.body.nationality;
        this.state = form.data.body.state;
        this.city = form.data.body.city;
        this.area = form.data.body.area;
        this.street = form.data.body.street;
        this.poBox = form.data.body.poBox;
        this.houseNumber = form.data.body.houseNumber;
        this.email = form.data.body.bank.username.username;
        this.mobileNumber = form.data.body.mobileNumber;
        this.branch = form.data.body.branch;
        this.employersName = form.data.body.employersName;
        this.department = form.data.body.department;
        this.bArea = form.data.body.bArea;
        this.phoneNumber = form.data.body.phoneNumber;
        this.bType = form.data.body.bType;
        this.bSector = form.data.body.bSector;
        this.bTypeOther = form.data.body.bTypeOther;
        this.bSectorOther = form.data.body.bSectorOther;
        this.iwr = form.data.body.iwr;
        this.iwrOther = form.data.body.iwrOther;
        this.salary = form.data.body.salary;
        this.mothersName = form.data.body.mothersName;
        this.spouseName = form.data.body.spouseName;
        this.maritalStatus = form.data.body.maritalStatus;
        this.dateOfIssue = form.data.body.issuanceDate;
        this.dateOfExpiry = form.data.body.dateOfExpiry;
        this.cbosId = form.data.body.cbosId;
        this.terms = form.data.body.terms;
        this.terms2 = form.data.body.terms2;
        this.atmCard = form.data.body.atmCard;
        this.cheque = form.data.body.cheque;
        this.submitDate = form.data.body.submitDate;
        this.accountType = form.data.body.accountType;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
