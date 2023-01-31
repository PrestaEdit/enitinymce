window.defaultTinyMceConfig = {
    external_plugins: {
        linkOverrided: '../../modules/enitinymce/views/js/plugin.js'
    },
    toolbar2: 'linkOverrided',
    link_class_list: [
        { title: 'None', value: '' },
        { title: 'External Link', value: 'ext_link' },
        { title: 'Internal Support Link', value: 'int_sup_link' },
        { title: 'Internal Marketing Link', value: 'int_mark_link' },
        { title: 'Other Internal Link', value: 'int_other_link' }
    ]
}