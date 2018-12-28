<template>
    <nav class="navbar bottom navbar-expand-lg fixed-bottom bg-light">
        <div class="container-fluid">

            <ul class="nav">
                <li class="nav-item">
                    <!--<router-link to='/about' class="nav-link">실시간<br>수요감축요청 router</router-link>-->
                    <a class="nav-link" href="#">실시간<br>수요감축요청</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">수요감축요청<br>이력</a>
                </li>
                <li class="nav-item align-self-center">
                    <a class="nav-link disabled" href="#">사용량</a>
                </li>
                <li class="nav-item align-self-center">
                    <a class="nav-link disabled" href="#">정산</a>
                </li>
                <li class="nav-item align-self-center">
                    <a class="nav-link disabled" href="#">전력수요예측</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "BottomNav"
    }
</script>

<style scoped>

</style>