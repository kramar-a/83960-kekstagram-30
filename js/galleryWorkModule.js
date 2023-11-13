import { BIG_PICTURE_CLOSE_BUTTON_CLASS, BIG_PICTURE_CONTAINER_CLASS, PICTURE_IMAGE_CLASS } from './constants.js';
import { getUserPhotos } from './data.js';
import { fullSizePhoto } from './fullSizePhotoModule.js';
import { thumbnailsGallery } from './galleryObjectModule.js';

thumbnailsGallery.init(getUserPhotos(), 'picture', 'pictures');

fullSizePhoto.init(BIG_PICTURE_CONTAINER_CLASS, BIG_PICTURE_CLOSE_BUTTON_CLASS);

const onThumbnailsContainerClick = function (evt) {
  if (evt.target.className === PICTURE_IMAGE_CLASS) {
    fullSizePhoto.show(thumbnailsGallery.clickedPicture);
  }
};

thumbnailsGallery.thumbnailsContainer.addEventListener('click', onThumbnailsContainerClick);
