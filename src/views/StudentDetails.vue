<template>
    <div>   
        <div class="container mx-auto p-8">
            <h1 class="font-semibold text-purple-400 text-3xl text-left mb-10">Spring 2021</h1>
            <!--syudent info-->
            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900 text-left">
      Student Information
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500 text-left">
      Personal information and course details.
    </p>
  </div>
  <div class="border-t border-gray-200">
    <dl>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Full name
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{student.name}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Student Id
        </dt>
        <dd class="mt-1 text-sm text-purple-600 font-semibold sm:mt-0 sm:col-span-2">
          {{student.id}}
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Email address
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{student.email}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Phone Number
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{student.phone}}
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
          Advisor
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{student.advisor}}
        </dd>
      </div>
    </dl>
  </div>
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900 text-left mt-10 mb-5">
      Course Details
    </h3>
</div>
</div>
            <div class="flex flex-row flex-wrap -mx-2 mt-0.5">
                <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2" v-for="(course,index) in this.student.courses" :key="index">
                    <div class="relative bg-white rounded  shadow-lg border">
                        <div class="p-4">
                            <h3 class="text-lg font-bold text-left">{{course.courseCode}}
                                <span class="text-sm"> - </span>
                                <span class="text-purple-600 text-sm mr-1">{{course.credit}}.0</span>
                                <span class="text-gray-400 text-xs">credits</span>
                                </h3>
                            <p class="block mb-2 text-sm text-gray-600 text-left">{{course.name}}</p>
                            <p class="text-sm mt-4 italic text-left mb-1">Class Schedule: </p>
                            <time class="block  font-semibold text-sm text-gray-600 text-left" v-for="d in course.day" :key="d">{{d}}</time>
                            <div class="text-left ">
                                <span class="bg-purple-200 text-purple-600 py-1 px-2 rounded-full text-xs">{{course.startTime}}-{{course.endTime}}</span>
                            </div>
                            <p class="mt-4 text-left text-xs">
                                {{course.description}}
                            </p>
                            <div class="flex mt-4">
                                <p class="block  font-semibold text-sm text-gray-400 text-left mr-2 ">Faculty: </p>
                                <p class="block mb-2 text-sm text-gray-600 text-left text-purple-600 font-semibold">{{course.faculty}}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
import axios from "axios"
    export default {
    created(){
      this.getSpecificStudent()
    },
    data(){
        return{
           student:[]
        }
    },
    methods:{
     async getSpecificStudent(){
        this.student=await axios.get('http://localhost:3000/students/'+this.$route.params.id)
        this.student=this.student.data
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>