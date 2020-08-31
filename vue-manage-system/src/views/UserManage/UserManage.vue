<template>
  <div class="manage">
    <el-dialog :title="operateType==='add'?'新增用户':'编辑'" :visible.sync="isShow">
      <common-form :formLabel="opreateFormLabel" :form="operateForm"></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <div class="manage-content">
      <common-table
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList"
        @edit="editUser"
        @del="delUser"
      ></common-table>
    </div>
  </div>
</template>

<script>
  import CommonForm from "../../components/CommonForm";
  import CommonTable from "../../components/CommonTable";
  export default {
    components: {
      CommonForm,
      CommonTable,
    },
    data() {
      return {
        operateType: 'add',
        isShow: false,
        tableData: [],
        tableLabel: [
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'age',
            label: '年龄'
          },
          {
            prop: 'sexLabel',
            label: '性别'
          },
          {
            prop: 'birth',
            label: '出生日期',
            width: '200'
          },
          {
            prop: 'addr',
            label: '地址',
            width: '320'
          }
        ],
        config: {
          page: 1,
          total: 30,
          loading: false
        },
        opreateForm: {
          name: '',
          addr: '',
          age: '',
          birth: '',
          sex: ''
        },
        opreateFormLabel: [
          {
            model: 'name',
            label: '姓名'
          },
          {
            model: 'age',
            label: '年龄'
          },
          {
            model: 'sex',
            label: '性别',
            type: 'select',
            opts: [
              {
                label: '男',
                value: 1
              },
              {
                label: '女',
                value: 0
              },
            ]
          },
          {
            model: 'birth',
            label: '出生日期',
            type: 'date'
          },
          {
            model: 'addr',
            label: '地址'
          },

        ],
        searchForm: {
          keyword: "",
        },
        formLabel: [
          {
            model: "keyword",
            label: "",
          },
        ],
      };
    },
    methods: {
      getList() {
        this.config.loading = true
        this.$http.get('/api/user/getUser', {
          params: {
            page: this.config.page
          }
        }).then(res => {
          this.tableData = res.data.list.map(item => {
            item.sexLabel = item.sex === 0 ? '女' : '男'
            return item
          })
          this.config.total = res.data.count
          this.config.loading = false
        })
      },
      editUser(row) {
        this.operateType = 'edit'
        this.isShow = true
        this.operateForm = row
      },
      confirm() {
        if (this.operateType === 'edit') {
          this.$http.post('/api/user/edit',
            this.opreateForm
          ).then(res => {
            this.isShow = false
            console.log(res.data);

            this.getList()
          })
        }
      },
      delUser(row) {
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let id = row.id
          this.$http.get('/api/user/del', {
            params: {
              id
            }
          }).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    created() {
      this.getList()
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/common.scss';
</style>
