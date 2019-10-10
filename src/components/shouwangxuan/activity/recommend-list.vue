<template>
    <ul class="tj-list">
        <li v-for="(i) in list" :key="i.id">
            <div class="box-title">
                <span>
                        <img :src="utils.BASEURL+i.avator" alt="">
                      <span>{{i.name}}</span>
                </span>
                <button @click="followMethod(i)" :class="{'followed':!i.follow}">{{i.follow ? '+ 关注' : '√ 已关注'}}</button>
            </div>
            <div class="box-content">
                <router-link :to="{path:'/detail',query:{id:i.art_id}}">
                    <b>最新发表：</b> {{i.art_title}}
                </router-link>
            </div>
        </li>
    </ul>
</template>

<script>
    import {
        Indicator,
        Toast
    } from 'mint-ui';
    import {
        getRecommendApi
    } from '@/api/login'
    import utils from '@/utils/config'
    export default {
        data() {
            return {
                utils,
                list: [],
                token: localStorage.getItem('token')
    
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            followMethod(item) {
                if (this.token) {
                    this.$store.dispatch('followTopic', {
                        followBloggerId: item.id
                    })
                    item.follow = !item.follow;
                }
            },
            fetchData(t) {
                Indicator.close();
                Indicator.open({
                    text: 'Loading...',
                    spinnerType: 'fading-circle'
                });
                getRecommendApi({
                    t: t
                }).then(res => {
                    Indicator.close();
                    this.list = res.data;
                }, err => {
                    console.log(err);
                }).catch(error => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tj-list {
        padding: 5px 15px;
        li {
            padding: 10px;
            list-style: none;
            background: #fff;
            font-size: 14px;
            border-bottom: 2px dashed #f3f3f3;
            &:last-child {
                border-bottom: 0;
            }
        }
        .box-title {
            display: flex;
            align-items: CENTER;
            justify-content: space-between;
            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                vertical-align: middle;
            }
            button {
                background: #ffffff;
                color: #FF9800;
                border: 1px solid #ff9800;
                outline: none;
                border-radius: 12px;
                height: 24px;
                &.followed {
                    color: #999;
                    border: 1px solid #e1e1e1;
                }
            }
        }
        .box-content {
            background: #f7f7f7;
            padding: 5px;
            margin: 10px 0 0;
            line-height: 26px;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            b {
                color: #FF9800;
            }
        }
    }
</style>

