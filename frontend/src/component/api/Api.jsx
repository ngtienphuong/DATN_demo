class Api{
    static url = "http://localhost:4000/api/v1/";

    static Login = this.url + 'auth/login'
    static User = this.url + 'user/'
    static AllUser = this.url + 'user/list'

    static Brand = this.url + 'brand/';
    static AddBrand = this.url + 'brand/';
    static GetOneBrand = (id) => { return this.url + "brand/getOneBrand/" + id; };
    static EditBrand = this.url + 'brand/';
    static TrashBrand = this.url + 'brand/trash';
    static ChangeTrashBrand = this.url + 'brand/trash';

    static Product = this.url + "product/";
    static EditProduct = this.url + "product/";
    static AddProduct = this.url + "product/";
    static TrashProduct = this.url + "product/trash";
    static ChangeTrashProduct = this.url + "product/trash";
    static ProductDetail = (id)=>{return this.url + "product/productdetail/" + id;};
    static ProductCategory = (id)=>{return this.url + "product/productcategory/" + id;};
    static GetOneProduct = (id)=>{return this.url + "product/getOneProduct/" + id;};

    static Category = this.url + "category/";
    static AddCategory = this.url + "category/";
    static ChangeTrashCategory = this.url + "category/";
    static TrashCategory = this.url + "category/trash";
    static GetOneCategory=(id) =>{return this.url + "category/getOneCategory/" +id};
    static EditCategory = this.url + "category/editCategory";


    static SubCategory = this.url + "subcategory/";

    static Cart = this.url + "cart/";
    static AddCart = this.url + "cart/";
    static DeleteCart = this.url + "cart/";
    static DeleteAllCart = this.url + "cart/all";
    static ChangeQuantityCart = this.url + "cart/";

    static Order = this.url + "order/";
    static OrderDetail = this.url + "orderdetail/";

}

export default Api;