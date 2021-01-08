<template>
  <div class="photo-wall">
    <el-timeline>
      <template v-for="(items, i) in dataList">
        <el-timeline-item
          :key="i"
          :timestamp="items.time"
          type="primary"
          placement="top"
        >
          <el-card>
            <div
              slot="header"
              class="clearfix"
              v-text="items.time + '照片墙'"
            ></div>
            <div class="img-list">
              <div
                v-for="(item, j) in items.list"
                :key="j"
                class="img-item-con"
              >
                <el-image
                  style="width: 100%; height: 100%"
                  :src="item.src"
                  fit="cover"
                  :preview-src-list="items.listSrc"
                  lazy
                >
                </el-image>
              </div>
            </div>
          </el-card>
        </el-timeline-item>
      </template>
    </el-timeline>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dataList: [
        {
          time: "2019",
          list: require.context("@/assets/photo/2019", false).keys(),
          listSrc: []
        },
        {
          time: "2020",
          list: require.context("@/assets/photo/2020", false).keys(),
          listSrc: []
        },
        {
          time: "2021",
          list: require.context("@/assets/photo/2021", false).keys(),
          listSrc: []
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  //方法集合
  methods: {
    init() {
      this.dataList.map(item => {
        let list = this.formatArray(item.time, item.list);
        item.list = list;
        item.listSrc = _.map(list, "src");
      });
    },
    formatArray(time, array) {
      let list = [];
      array.map(e => {
        let str = e.replace(/\.\//g, "");
        let src = require(`@/assets/photo/${time}/${str}`);
        let item = {
          id: str,
          src,
          title: str
        };
        list.push(item);
      });
      return list;
    }
  }
};
</script>
<style lang="less">
::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #c7c5c8;
}
::-webkit-scrollbar-track {
  border-radius: 0;
  background: #ddd;
}
.photo-wall {
  padding: 50px;
}
* {
  box-sizing: border-box;
}
.img-list {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  .img-item-con {
    width: 300px;
    float: left;
    height: 240px;
    padding: 10px;
    /deep/.el-image {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      border: 2px #ccc solid;
      border-radius: 10px;
      img {
        transition: all 0.4s;
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
