<template>
  <a :href="href" @click.prevent="share">
    <slot />
  </a>
</template>

<script>
const SOCIALS = {
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
    twitter: 'https://twitter.com/home?status=',
    linkedIn: 'https://www.linkedin.com/shareArticle?mini=true&url=',
}
export default {
    name: 'LpShareable',
    props: {
        href: {
          type: String,
          required: true
        },
        dataSuffix: {
            type: String,
            default: ''
        },
        dataWidth: {
            type: Number,
            default: 450
        },
        dataHeight: {
            type: Number,
            default: 630
        },
        type: {
            type: String,
            default: 'facebook',
            validate: key => Object.keys(SOCIALS).includes(key)
        },
    },
    computed: {
        shareLink() {
          return this.href + this.dataSuffix
        },
    },
    methods: {
        share() {
            window.open(
                this.shareLink,
                'sharer',
                'status=no' +
                `,height=${this.dataHeight},width=${this.dataWidth}` +
                ',resizable=yes,left=100,top=0,screenX=0,screenY=0,toolbar=no' +
                ',menubar=no,scrollbars=no,location=no,directories=no'
            );
        }
    }
}
</script>
