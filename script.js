Vue.component ('profileform',
  props [],
  template:  `
    <div class="card bg-info text-light">

      <div class="card-header">
        <h2 class="card-title"> </h2>
        <img class="card-img-top" src="#">
      </div>

      <div class="card-body">
        <h3 class="sub-title"> </h3>
        <p class="card-text"> </p>
        <ul>
          <li></li>
        </ul>
      </div>

      <div class="card-footer">
        <a class="card-link" href="#">Website</a>
        <a class="card-link" href="#">Email</a>
      </div>

      </div>
    </div>
  `


)

let app = new Vue({
  el: "#app",
  data: {
    newForm:  {
      fullname: "",
      email: "",
      selfie: "",
      headline: "",
      title: "",
      summary: "",
      website: "",
      checkedskills: [],
    },
    forms: [
      {fullname: "George", email: "george@gmail.com", selfie: "", headline: "CRAZY for daffodils", title: "Go-go Dancer", summary: "Since I was 12, I knew I wanted to fly airplanes.", website: "www.george.com", checkedskills: []},
    ],
  },
  methods: {
  createForm() {
    this.forms.push(this.newForm);
    this.newForm = {fullname: "", email: "", selfie: "", headline: "", title: "", summary: "", website: "", checkedskills: []}
  }
}
});
