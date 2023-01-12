import { createRouter, createWebHistory } from "vue-router";
import SignUpView from "@/views/SignUpView.vue";
import otp from "@/views/OTP.vue";
import form from "@/layouts/Form.vue";
import accountType from "@/views/AccountType.vue";
import Step1 from "@/views/PersonalInfoView.vue";
import Step2 from "@/views/ContactInfoView.vue";
import Step3 from "@/views/OccupationDetailsView.vue";
import Step4 from "@/views/CbosFormView.vue";
import Step5 from "@/views/DocumentsUploadView.vue";
import Step6 from "@/views/Submit.vue";
import success from "@/views/SuccessView.vue";

import signup from "@/components/Signup.vue";
import TheBg from "@/components/TheBg.vue";
import signedin from "@/views/signedin.vue";
import signinView from "@/views/SignInView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SignUpView,
    },
    {
      path: "/signIn",
      name: "signIn",
      component: signinView,
    },
    {
      path: "/signedin",
      name: "signedin",
      component: signedin,
    },
    {
      path: "/otp",
      name: "otp",
      component: otp,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: "/account-type",
      name: "accountType",
      component: accountType,
    },
    {
      path: "/Form/Personal-info",
      name: "Step1",
      component: Step1,
    },
    {
      path: "/Form/Contact-info",
      name: "Step2",
      component: Step2,
    },
    {
      path: "/Form/Occupation-details",
      name: "Step3",
      component: Step3,
    },
    {
      path: "/Form/Cbos-form",
      name: "Step4",
      component: Step4,
    },
    {
      path: "/Form/upload",
      name: "Step5",
      component: Step5,
    },
    {
      path: "/Form/success",
      name: "success",
      component: success,
    },
    {
      path: "/Form/submit",
      name: "Step6",
      component: Step6,
    },
    // {
    //   path: "/Form/",
    //   name: "form",
    //   component: form,

    //   children: [
        
    //   ],
    // },
  ],
});

export default router;
