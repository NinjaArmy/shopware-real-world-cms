import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'button',
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
    /* The slot config is important!
       We give the slot button the element text in this tutorial because we haven't defined a button element yet.
       You can use the existing blocks and elements out of the box but it gets interesting if you want to create your very own element with an own config.
       We'll take a look at this later in this guide.
    */
    slots: {
        button: 'text'
    }
});