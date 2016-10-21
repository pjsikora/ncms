class Content {
    static model(){
        return {
            id: {
                type: Number
            },

            parent_id: {
                type: String,
                required: true
            },

            order: {
                type: Number,
                required: true
            },

            created: {
                type: Date
            },

            is_deleted: {
                type: Number,
                derault: false
            },

            is_visible: {
                type: Number,
                derault: true
            },

            name: {
                type: String,
                required: true
            }
        }
    }

}