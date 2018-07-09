import Component from '@ember/component';

export default Component.extend({
    editable: 'false',
    actions: {
        toggleEdit() {
            this.toggleProperty('editable');
        },
        updatePost() {
            console.log('editable', this.editable);
        }
    }
});
