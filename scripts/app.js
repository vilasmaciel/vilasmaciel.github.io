!function(e){"use strict";var t=e.querySelector("#app");t.displayInstalledToast=function(){e.querySelector("platinum-sw-cache").disabled||e.querySelector("#caching-complete").show()},t.addEventListener("dom-change",function(){console.log("Our app is ready to rock!"),t.section="categories"}),window.addEventListener("WebComponentsReady",function(){}),t.onDataRouteClick=function(){var t=e.querySelector("#paperDrawerPanel");t.narrow&&t.closeDrawer()},t.scrollPageToTop=function(){e.getElementById("mainContainer").scrollTop=0},t.handleResponse=function(e){t.categories=e.detail.response},t.categorySelected=function(e){t.section="category",t.category=e.detail,t.isCategoriesSelected=!0,t.title=this.getCategory(t.category).name},t.getCategory=function(e){for(var o=0;o<t.categories.length;o++)if(t.categories[o].activityId===e)return t.categories[o]},t.showCategoryList=function(){t.section="categories",t.category=void 0},t.showCategoryElement=function(){t.section="category"},t.showCategoryElement=function(){t.section="category"},t._quizSelected=function(e){t.section="quiz",t.quiz=e.detail}}(document);