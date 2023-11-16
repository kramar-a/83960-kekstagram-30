//import { BIG_PICTURE_CLOSE_BUTTON_CLASS, BIG_PICTURE_CONTAINER_CLASS/*, PICTURE_IMAGE_CLASS*/ } from './constants.js';
import { galleryModuleClasses } from './constants.js';
import { getUserPhotos } from './data.js';
import { fullSizePhoto } from './fullSizePhotoModule.js';
import { thumbnailsGallery } from './galleryObjectModule.js';

thumbnailsGallery.init(getUserPhotos(), galleryModuleClasses.thumbnailTemplateId, galleryModuleClasses.thumbnailContainerClass);

fullSizePhoto.init(galleryModuleClasses.bigPictureContainerClass, galleryModuleClasses.bigPictureCloseButtonClass);
