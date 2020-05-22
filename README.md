# covid19alert
A script tag to include in your website to show a Covid19 alert message.

- Test Run: 
https://ahmed-badawy.github.io/covid19alert/

#### Implementation :-
add this to your html body tag:  
`<script src="https://ahmed-badawy.github.io/covid19alert/covid19alert.js"></script>`

---

## You can customize the shown message using a web component: look at the customized example: 

- Test Run: 
https://ahmed-badawy.github.io/covid19alert/customizable/

#### Implementation :-
```html
// add this to your body tag: 
<covid-alert>
    <div slot="title">#StayAtHome</div><br>
    <div slot="text2">Protect your community against COVID-19</div>
</covid-alert>
<script src="https://ahmed-badawy.github.io/covid19alert/customizable/covid19alertcustomizable.js"></script>
```
