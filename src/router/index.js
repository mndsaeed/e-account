import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
// import SignUpView from "@/views/SignUpView.vue";
// import otp from "@/views/OTP.vue";
// import form from "@/layouts/Form.vue";
// import accountType from "@/views/AccountType.vue";
// import Step1 from "@/views/PersonalInfoView.vue";
// import Step2 from "@/views/ContactInfoView.vue";
// import Step3 from "@/views/OccupationDetailsView.vue";
// import Step4 from "@/views/CbosFormView.vue";
// import Step5 from "@/views/DocumentsUploadView.vue";
// import Step6 from "@/views/Submit.vue";
// import success from "@/views/SuccessView.vue";

// import signup from "@/components/Signup.vue";
// import TheBg from "@/components/TheBg.vue";
// import signedin from "@/views/signedin.vue";
// import signinView from "@/views/SignInView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/SignUpView.vue"),
  },
  {
    path: "/signIn",
    name: "signIn",
    component: () => import("@/views/SignInView.vue"),
  },
  {
    path: "/signedin",
    name: "signedin",
    component: () => import("@/views/signedin.vue"),
  },
  {
    path: "/otp",
    name: "otp",
    component: () => import("@/views/OTP.vue"),
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/account-type",
    name: "accountType",
    component: () => import("@/views/AccountType.vue"),
  },
  {
    path: "/Form/Personal-info",
    name: "Step1",
    component: () => import("@/views/PersonalInfoView.vue"),
  },
  {
    path: "/Form/Contact-info",
    name: "Step2",
    component: () => import("@/views/ContactInfoView.vue"),
  },
  {
    path: "/Form/Occupation-details",
    name: "Step3",
    component: () => import("@/views/OccupationDetailsView.vue"),
  },
  {
    path: "/Form/Cbos-form",
    name: "Step4",
    component: () => import("@/views/CbosFormView.vue"),
  },
  {
    path: "/Form/upload",
    name: "Step5",
    component: () => import("@/views/DocumentsUploadView.vue"),
  },
  {
    path: "/Form/misc",
    name: "Step6",
    component: () => import("@/views/MiscInfoView.vue"),
  },
  {
    path: "/Form/success",
    name: "success",
    component: () => import("@/views/SuccessView.vue"),
  },
  {
    path: "/Form/submit",
    name: "Step7",
    component: () => import("@/views/Submit.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
