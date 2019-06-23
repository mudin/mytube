import Vue from 'vue';
import {
  Button, Divider, Row, Col, Message, Input
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ko';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.use(Button);
Vue.use(Input);
Vue.use(Divider);
Vue.use(Row);
Vue.use(Col);

Vue.prototype.$message = Message;
