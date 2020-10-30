"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Cadastro;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var ImagePicker=_interopRequireWildcard(require("expo-image-picker"));var _native=require("@react-navigation/native");var _axios=_interopRequireDefault(require("axios"));var _face=_interopRequireDefault(require("../../../assets/face2.png"));var _common=require("../../common");require("./styles");var _jsxFileName="/home/marllon/Documentos/GitGithub/aps_unip/src/screens/Cadastro/index.js";function Cadastro(){var _useState=(0,_react.useState)(null),_useState2=(0,_slicedToArray2["default"])(_useState,2),image=_useState2[0],setImage=_useState2[1];var _useState3=(0,_react.useState)("robson"),_useState4=(0,_slicedToArray2["default"])(_useState3,2),name=_useState4[0],setName=_useState4[1];var _useState5=(0,_react.useState)('123456'),_useState6=(0,_slicedToArray2["default"])(_useState5,2),senha=_useState6[0],setSenha=_useState6[1];var _useState7=(0,_react.useState)('robson@gmail.com'),_useState8=(0,_slicedToArray2["default"])(_useState7,2),email=_useState8[0],setEmail=_useState8[1];var focused=(0,_native.useIsFocused)();signup=function signup(){return _regenerator["default"].async(function signup$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return _regenerator["default"].awrap(_axios["default"].post("".concat(_common.server,"/signup"),{name:{name:name},email:{senha:senha},password:{senha:senha}}));case 3:showSucess('Usuario cadastrado!');_context.next=9;break;case 6:_context.prev=6;_context.t0=_context["catch"](0);(0,_common.showError)(_context.t0);case 9:case"end":return _context.stop();}}},null,null,[[0,6]]);};(0,_react.useEffect)(function(){(function _callee(){var _ref,status;return _regenerator["default"].async(function _callee$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(_reactNative.Platform.OS!=='web')){_context2.next=6;break;}_context2.next=3;return _regenerator["default"].awrap(ImagePicker.requestCameraRollPermissionsAsync());case 3:_ref=_context2.sent;status=_ref.status;if(status!=='granted'){alert('Sorry, we need camera roll permissions to make this work!');}case 6:case"end":return _context2.stop();}}});})();},[]);var pickImage=function pickImage(){var result;return _regenerator["default"].async(function pickImage$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return _regenerator["default"].awrap(ImagePicker.launchCameraAsync({mediaTypes:ImagePicker.MediaTypeOptions.Videos,allowsEditing:true,aspect:[4,3],quality:1,videoMaxDuration:8}));case 2:result=_context3.sent;console.log(result);if(!result.cancelled){setImage(result.uri);}case 5:case"end":return _context3.stop();}}});};var fileToUpload=image;var data=new FormData();data.append('type','video');data.append('file_attachment',fileToUpload);return _react["default"].createElement(_reactNative.View,{style:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#d0e2dc'},__self:this,__source:{fileName:_jsxFileName,lineNumber:77,columnNumber:5}},_react["default"].createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:78,columnNumber:7}},_react["default"].createElement(_reactNative.Text,{style:{marginBottom:100,color:'#2980b6',textAlign:'justify',fontWeight:'700',fontSize:17},__self:this,__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:9}}," Fa\xE7a login no novo reconhencimento Facial")),_react["default"].createElement(_reactNative.Image,{style:{width:200,height:150,borderRadius:10,alignItems:'center'},source:_face["default"],__self:this,__source:{fileName:_jsxFileName,lineNumber:81,columnNumber:7}}),_react["default"].createElement(_reactNative.TouchableOpacity,{style:styles.button,onPress:pickImage,__self:this,__source:{fileName:_jsxFileName,lineNumber:86,columnNumber:7}},_react["default"].createElement(_reactNative.Text,{style:styles.btnTextStyle,__self:this,__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:9}},"CADASTRE SUA FACE")),image&&_react["default"].createElement(_reactNative.Image,{source:{uri:image},style:{width:200,height:200},__self:this,__source:{fileName:_jsxFileName,lineNumber:89,columnNumber:17}}),_react["default"].createElement(_reactNative.TextInput,{style:styles.input,placeholder:"Nome",autoCorrect:false,value:name,onChangeText:function onChangeText(text){setName(text);},__self:this,__source:{fileName:_jsxFileName,lineNumber:92,columnNumber:7}}),_react["default"].createElement(_reactNative.TouchableOpacity,{style:styles.button,onPress:signup,__self:this,__source:{fileName:_jsxFileName,lineNumber:100,columnNumber:7}},_react["default"].createElement(_reactNative.Text,{style:styles.btnTextStyle,__self:this,__source:{fileName:_jsxFileName,lineNumber:101,columnNumber:9}},"REGISTRA CONTA ")));}