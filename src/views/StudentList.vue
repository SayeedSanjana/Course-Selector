<template>
    <div>
     <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
              <h1 class="font-semibold text-purple-400 text-xl" >Undergraduate Student's List</h1>
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Student Id</th>
                                <th class="py-3 px-6 text-left">Full Name</th>
                                <th class="py-3 px-6 text-center">Email</th>
                                <th class="py-3 px-6 text-center">Phone No.</th>
                                <th class="py-3 px-6 text-center">Assigned Advisor</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                            <tr class="border-b border-gray-200 hover:bg-gray-100" @click="studentDetails(stu.id)" v-for="stu in this.studentList" :key="stu">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center mr-2 ml-2">
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{{stu.id}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center ml-2">
                                        <span class="font-medium">{{stu.name}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center justify-center">
                                        <span class="font-medium">{{stu.email}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span>{{stu.phone}}</span>                               
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <span class="font-medium">{{stu.advisor}}</span>
                                    </div>
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        mounted(){
            this.getStudent()
        },
       data(){
           return{
               studentList:[]
           }
       },
       methods:{
           studentDetails(id) {
                this.$router.push({
                    name: 'StudentDetails',
                    params: {
                        id: id
                    }
                })
            },
           async getStudent(){
             this.studentList=await axios.get('http://localhost:3000/students')
             this.studentList=this.studentList.data
           }
       } 
    }
</script>

<style lang="scss" scoped>

</style>