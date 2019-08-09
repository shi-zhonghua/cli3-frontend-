export default {
    data() {
        return {
            message: 'hello',
            foo: 'abc'
        }
    },
    created() {
        console.log('混入对象的钩子被调用')

    },
    methods: {
        foo: function() {
            console.log('foo')
        },
        conflicting: function() {
            console.log('from mixin')
        }
    }
}