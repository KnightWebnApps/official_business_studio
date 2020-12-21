// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
// * Utils
import blockContent from './utils/blockContent'
import seoImage from './utils/seoImage'
import myStory from './utils/myStory'
import social from './utils/social'
import hero from './utils/storyBlocks/hero'
import callToAction from './utils/storyBlocks/callToAction'
import callToActionWithIllustration from './utils/storyBlocks/callToActionWithIllustration'
import textBlock from './utils/storyBlocks/textBlock'
import textWithIllustration from './utils/storyBlocks/textWithIllustration'
import gallery from './utils/storyBlocks/gallery'
import video from './utils/storyBlocks/video'
import form from './utils/storyBlocks/form'
import faq from './utils/storyBlocks/faq'
import siteSettings from './settings'
import page from './page'

//* Post Document
import category from './post/category'
import post from './post/post'
import author from './post/author'

//* Product Document
import product from './product/product'
import service from './product/service'
import exampleProduct from './product/exampleProduct'
import features from './product/features'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    author,
    category,
    product,
    exampleProduct,
    features,
    seoImage,
    myStory,
    social,
    hero,
    callToAction,
    callToActionWithIllustration,
    gallery,
    textBlock,
    textWithIllustration,
    video,
    form,
    faq,
    page,
    service,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent
  ])
})
