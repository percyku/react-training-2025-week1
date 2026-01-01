//   <EditModal
//   modalRef={profileModalRef}
//   imageUrl={tempProduct.imageUrl}
//   title={tempProduct.title}
//   description={tempProduct.description}
//   content={tempProduct.content}
//   origin_price={tempProduct.origin_price}
//   price={tempProduct.price}
//   imagesUrl={tempProduct.imagesUrl}
// ></EditModal>

const EditModal = ({
  // modaaId,
  modalRef,
  imageUrl,
  title,
  description,
  content,
  origin_price,
  price,
  imagesUrl,
}) => {
  return (
    <div className="modal fade" tabIndex="-1" ref={modalRef} key={imageUrl}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="card mb-3">
            <img
              src={imageUrl}
              className="card-img-top primary-image"
              alt="主圖"
            />
            <div className="card-body">
              <h5 className="card-title">
                {title}
                <span className="badge bg-primary ms-2">{}</span>
              </h5>
              <p className="card-text">商品描述：{description}</p>
              <p className="card-text">商品內容：{content}</p>
              <div className="d-flex">
                <p className="card-text text-secondary">
                  <del>{origin_price}</del>
                </p>
                元 / {price} 元
              </div>
              <h5 className="mt-3">更多圖片：</h5>
              <div className="d-flex flex-wrap">
                <div className="row">
                  {imagesUrl?.map((url, index) => (
                    <div className="col-6">
                      <img key={index} src={url} className="images" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
