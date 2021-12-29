<template>
    <div>
        <!--main content-->
        <div class=" mt-10 px-10">
            <h1 class="font-semibold text-gray-600 text-2xl text-left mb-10">Spring 2021 Semester</h1>
            <h3 class="font-semibold text-purple-400 text-xl text-left mb-5">List Of Courses</h3>
        </div>
        <div class="flex flex-row flex-wrap -mx-2 mt-5 px-10">
            <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2" v-for="(course,index) in courses" :key="index">
                <div class="relative bg-white rounded  shadow-lg border">
                    <div class="p-4">
                        <div class="flex justify-between">
                            <h3 class="text-lg font-bold text-left">{{course.courseCode}}
                                <span class="text-sm"> - </span>
                                <span class="text-purple-600 text-sm mr-1">{{course.credit}}.0</span>
                                <span class="text-gray-400 text-xs">credits</span>
                            </h3>
                            <svg class="w-4 h-4 fill-current text-purple-600" width="33" height="32" viewBox="0 0 33 32"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 16H1M17 32V16V32ZM17 16V0V16ZM17 16H33H17Z" stroke="#73C6CA"
                                    stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>

                        <p class="block mb-2 text-sm text-gray-600 text-left">{{course.name}}</p>
                        <p class="text-sm mt-4 italic text-left mb-1">Class Schedule: </p>
                        <time class="block  font-semibold text-sm text-gray-600 text-left" v-for="d in course.day"
                            :key="d">{{d}}</time>
                        <div class="text-left ">
                            <span
                                class="bg-purple-200 text-purple-600 py-1 px-2 rounded-full text-xs">{{course.startTime}}-{{course.endTime}}</span>
                        </div>
                        <p class="mt-4 text-left text-xs">
                            {{course.description}}
                        </p>
                        <div class="flex mt-4">
                            <p class="block  font-semibold text-sm text-gray-400 text-left mr-2 ">Faculty:</p>
                            <p class="block mb-2 text-sm text-left text-purple-600 font-semibold">
                                {{course.faculty}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--main content-->

        <!-- List of courses added-->
        <div class="px-10">
            <h1 class="font-semibold text-purple-400 text-lg text-left mb-5" >Added Courses</h1>
         <table class="items-center bg-transparent w-full border-collapse">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">Course Name</th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Schedule</th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left hidden md:table-cell">Credit</th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left hidden lg:table-cell "></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              CSE110
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              Monday,Thursday <br>
              (8:00am-9:00am)
            </td>
            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 hidden md:table-cell">
              3.0 credits
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 hidden lg:table-cell">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.63318 2.63465C6.14483 -0.876262 11.8558 -0.876262 15.3674 2.63465C18.8775 6.14555 18.8775 11.858 15.3674 15.3689C13.6116 17.1239 11.3058 18.0011 8.9999 18.0011C6.69405 18.0011 4.389 17.1239 2.63318 15.3689C-0.877727 11.858 -0.877727 6.14555 2.63318 2.63465ZM5.28644 11.6546C4.99306 11.948 4.99306 12.4222 5.28644 12.7156C5.43275 12.8619 5.62483 12.9355 5.81695 12.9355C6.00902 12.9355 6.20114 12.8619 6.34746 12.7156L8.99994 10.0624L11.6517 12.7148C11.7987 12.8612 11.9909 12.9347 12.1822 12.9347C12.3743 12.9347 12.5664 12.8612 12.7127 12.7148C13.0061 12.4215 13.0061 11.9465 12.7127 11.6539L10.061 9.00137L12.7134 6.34889C13.0068 6.05551 13.0068 5.58054 12.7134 5.2879C12.4208 4.99453 11.9458 4.99453 11.6525 5.2879L8.99997 7.94038L6.34749 5.2879C6.05412 4.99453 5.57988 4.99453 5.28651 5.2879C4.99313 5.58054 4.99313 6.05551 5.28651 6.34889L7.93899 9.00137L5.28644 11.6546Z" fill="#FE646F"/>
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- List of courses added-->
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        mounted() {
            this.getCourseList()
        },
        data() {
            return {
                courses: [],
                coursesLis:[],
                addedCourse:{
                 name:'',
                 credit:0,
                 semester:'',
                 courseCode:'',
                 faculty:'',
                 day:[],
                 startTime:'',
                 endTime:'',
                 description:''
                },
            }
        },
        methods: {
            async getCourseList() {
                this.courses = await axios.get('http://localhost:3000/courses')
                this.courses = this.courses.data
                console.log(this.courses)
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>