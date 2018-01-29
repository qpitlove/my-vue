<template>
    <div class="container">
        <alert-variants1></alert-variants1>
        <hr/>

        <b-alert show>Default Alert</b-alert>

        <b-alert variant="success" show>Success Alert</b-alert>

        <b-alert variant="danger"
                 dismissible
                 :show="showDismissibleAlert"
                 @dismissed="showDismissibleAlert=false">
            Dismissible Alert!
        </b-alert>

        <b-alert :show="dismissCountDown"
                 dismissible
                 variant="warning"
                 @dismissed="dismissCountDown=0"
                 @dismiss-count-down="countDownChanged">
            <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
            <b-progress variant="warning"
                        :max="dismissSecs"
                        :value="dismissCountDown"
                        height="4px">
            </b-progress>
        </b-alert>

        <b-btn @click="showAlert" variant="info" class="m-1">
            Show alert with count-down timer
        </b-btn>
        <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
            Show dismissible alert ({{showDismissibleAlert ? 'visible' : 'hidden'}})
        </b-btn>

        <hr>

        <div style="margin-top: 2rem; padding-bottom: 1rem;"><h1>Make Bootstrap Sexy Again</h1></div>
        <!-- Alerts -->
        <h2>Alerts</h2>
        <div style="padding: 1rem;">
            <div v-for="brand in ['success', 'info', 'warning', 'danger']" class="alert" :class="'alert-' + brand">
                <strong>Well done!</strong> You successfully read this {{brand}} alert message.
            </div>
        </div>
        <h2>Breadcrumb</h2>
        <div style="padding: 1rem;">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </div>
        <!-- Buttons-->
        <h2>Buttons</h2>
        <div style="padding: 1rem;">
            <div v-for="type in ['', 'outline']" :key="type">
                  <span v-for="brand in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']" :key="brand">
                      <button role="button" class="btn" :class="'btn-' + (type.length ? (type + '-') : '') + brand"
                              style="margin-bottom: 1rem; margin-right: 1rem;">
                          {{brand}} {{type}}
                      </button>
                  </span>
            </div>
        </div>
        <!-- Progress-->
        <h2>Progress</h2>
        <div style="padding: 1rem;">
            <div v-for="brand in ['success', 'info', 'warning', 'danger']" :key="brand" class="progress"
                 style='margin-bottom: 1rem;'>
                <div class="progress-bar" :class="'bg-' + brand" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
                     aria-valuemax="100"></div>
            </div>
        </div>
        <!-- Notice-->
        <h2>Modal</h2>
        <div style="padding: 1rem;">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Spacing utilities-->
        <h2>Spacing utilities</h2>
        <div style="padding: 1rem;">
            <div v-for="brand in ['success', 'info', 'warning', 'danger']" :key="brand" class="progress"
                 style='margin-bottom: 1rem;'>
                <div class="progress-bar" :class="'bg-' + brand" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
                     aria-valuemax="100"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import AlertVariants1 from '@/components/AlertVariants1'

    export default {
        components: {AlertVariants1},
        data() {
            return {
                dismissSecs: 10,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../styles/custom-bootstrap.scss';
    @import '~bootstrap/scss/bootstrap.scss';
</style>
