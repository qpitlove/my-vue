<template>
    <div>
        <b-dropdown id="ddown-aria" text="Dropdown ARIA" variant="primary" class="m-2">
            <div role="group" aria-lableledby="header1">
                <b-dropdown-header id="header1">Groups</b-dropdown-header>
                <b-dropdown-item-button aria-describedby="header1">Add</b-dropdown-item-button>
                <b-dropdown-item-button aria-describedby="header1">Delete</b-dropdown-item-button>
            </div>
            <div role="group" aria-lableledby="header2">
                <b-dropdown-header id="header2">Users</b-dropdown-header>
                <b-dropdown-item-button aria-describedby="header2">Add</b-dropdown-item-button>
                <b-dropdown-item-button aria-describedby="header2">Delete</b-dropdown-item-button>
            </div>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button>Something <strong>not</strong> associated with user</b-dropdown-item-button>
        </b-dropdown>


        <b-alert show variant="primary">Primary Alert</b-alert>
        <b-alert show variant="secondary">Secondary Alert</b-alert>
        <b-alert show variant="success">Success Alert</b-alert>
        <b-alert show variant="danger">Danger Alert</b-alert>
        <b-alert show variant="warning">Warning Alert</b-alert>
        <b-alert show variant="info">Info Alert</b-alert>
        <b-alert show variant="light">Light Alert</b-alert>
        <b-alert show variant="dark">Dark Alert</b-alert>
    </div>
</template>
<style lang="scss" scoped>
    @import '../styles/custom-bootstrap.scss';
    @import '~bootstrap/scss/bootstrap.scss';
</style>
