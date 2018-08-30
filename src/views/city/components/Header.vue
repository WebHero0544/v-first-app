<template>
    <header class="header">
        <div>
            <router-link to="/">
                <font-awesome-icon :icon="['fas', 'angle-left']" size="lg" />
            </router-link>
        </div>
        <div>城市选择</div>
        <div></div>
    </header>
</template>

<script>

export default {
    name: 'CityHeader',
};

</script>
<style scoped lang="scss">
    .header {
        display: flex;
        height: 0.86rem;
        background-color: #2a9de2;
        >div {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
        }
        >div:first-child, >div:last-child {
            width: .86rem;
            >a {
                color: #fff;
            }
        }
        >div:nth-child(2) {
            flex: 1;
            font-size: .32rem;
        }
    }


</style>
