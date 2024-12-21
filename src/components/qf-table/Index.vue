<template>
  <el-table row-key="cat_id" :data="tableData" style="width: 100%">
    <template v-for="(item, index) in columns">
      <el-table-column
        :key="index"
        v-if="item.field"
        :prop="item.field"
        :label="item.title"
        :width="item.width"
      >
      </el-table-column>
      <el-table-column
        :width="item.width"
        :key="index"
        :label="item.title"
        v-else
      >
        <template slot-scope="scope">
          <el-switch
            v-if="item.type === 'switch'"
            v-model="scope.row[item.payload.field]"
            @change="item.payload.change(scope.row)"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>

          <img
            v-if="item.type === 'img'"
            :src="scope.row[item.payload.field]"
            alt="img"
          />

          <el-tag
            v-if="item.type === 'tag'"
            :type="scope.row[item.payload.field] | elTagTypeFilter"
            >{{ scope.row[item.payload.field] | cateFilter }}</el-tag
          >

          <template v-if="item.type === 'btn'">
            <el-button
              size="mini"
              :type="item.type"
              v-for="(item, index) in item.payload"
              :key="index"
              @click="item.click(scope.row)"
              >{{ item.name }}</el-button
            >
          </template>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      required: true,
      type: Array,
    },
    columns: {
      /*
      [
        {title,field,...}
      ]
      */
      required: true,
      type: Array,
    },
  },
};
</script>

<style></style>
