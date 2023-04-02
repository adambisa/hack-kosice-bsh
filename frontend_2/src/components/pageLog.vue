<template>

  <div class="scroll">
    <p v-for="(log, index) in logs" :key="index">{{log.timeOf }}:  {{ log.action }}</p>
  </div>
</template>


<script>

export default{
    data(){
        return {
            logs:[
                {timeOf:'2.4.2023, 14:32:45', action:'generated color sequence for challenge 1'},
                {timeOf:'2.4.2023, 2:32:45', action:'generated color sequence for challenge 2'},
                {timeOf:'2.4.2023, 2:32:45', action:'generated color sequence for challenge 1'},
                {timeOf:'3.4.2023, 22:32:45', action:'gyro on/off for challenge 4 or whatever'},
                {timeOf:'4.4.2023, 15:32:45', action:'generated color sequence for challenge 1'},
                {timeOf:'5.4.2023, 12:32:45', action:'generated logo for challenge 2'},
                {timeOf:'6.4.2023, 21:32:45', action:'generated color sequence for challenge 1'},
        ]
        }
    }
}





</script>








<style scoped>

div.scroll {
  display: block;  
  align-content: center;
  width: 50%;
  height: 150px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  padding: 20px;
}
div p {
    color: white;
}
</style>