import React from 'react'
import PropTypes from 'prop-types'
import { Upload, Icon, Modal,message} from 'antd';

export default class PicturesWall extends React.Component {
    static propTypes = {
        imgs : PropTypes.array
    }

    constructor (props){
        super(props)

        //一开始默认为空数组
        let fileList = [
            {
                uid: '-1',
                name: 'xxx.png',
                status: 'done', //图片的状态done-已上传，uploading-正在上传中，remove已删除
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
        ]
        //如果一旦传入了imgs属性
        const {imgs} = this.props
        if (imgs && imgs.length > 0) {
            fileList = imgs.map((img,index) => ({
                uid: -index,
                name: img,
                status: 'done',
                url: '图片文件的基础路径'+img,
            }))
        }
        //初始化状态
        this.state = {
            previewVisible: false,  //标识是否显示大图预览
            previewImage: '',       //大图的url
            fileList                //所有已上传图片的数组
        }
    }

    /**
     * 获取所有已上传图片文件名的数组
     */
    getImgs = () => {
        return this.state.fileList.map(file => file.name)
    }

    //隐藏Modal
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        //显示指定file对应的大图
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };

    /**
     * 所有已上传图片文件对象的数组
     * @param file  当前操作的图片文件(上传、删除)
     * @param fileList
     */
    handleChange = ({ file,fileList }) => {
        //一旦上传成功，将当前上传的file的信息修正(name,url)
        if (file.status === 'done'){
            message.success('上传图片成功')
            const result = file.response //file.response是文件上传返回的信息
            fileList[fileList.length-1].name = result.name
            fileList[fileList.length-1].url = result.url
        } else if (file.status === 'remove') {
            //发送请求，删除图片
        }

        //在操作的过程中，及时的更新fileList状态
        this.setState({ fileList })
    };

    handleRemove = (file) => {
        console.log(file)
    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div>Upload</div>
            </div>
        );
        return (
            <div>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"     /*上传图片地址*/
                    accept="image/*"    /*只接受图片格式*/
                    listType="picture-card"
                    fileList={fileList}     /*所有已上传文件的数组*/
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    onRemove={this.handleRemove}
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

