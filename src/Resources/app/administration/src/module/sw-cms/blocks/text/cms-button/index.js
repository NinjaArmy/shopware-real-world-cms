import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'cms-button',
    label: 'sw-cms.blocks.text.ninja-cms-button.label',
    category: 'text',
    component: 'sw-cms-block-button',
    previewComponent: 'sw-cms-preview-button',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    /* Changed this line of code */
    slots: {
        button: 'cms-button'
    }
});