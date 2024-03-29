import React, { useState, useEffect } from 'react';
// import { useLoginStore } from '@/store';
import loginStore from '@/store/login';
import { getFaithView, getFaithPreView } from '@/api/temple';
import { LoginReq, PreLoginRes } from '@/api/code/type';
import type { Template, TemplateContent } from '@/api/temple/type';
import { getPayEnv, getUrlCode, getQueryParams } from '@/utils/tools';
// import setPageTitle from '@/utils/set-page-title';
import { storage } from '@/utils/storage';
import emitter from '@/utils/mitt';
import Content from '@/components/Content';
// import Banner from '@/components/Banner';
import MeritList from '@/components/MeritList';
// import PreMeritList from '@/components/PreMeritList';
// import TextEllipsis from '@/components/TextEllipsis';
// import FootPanel from '@/components/FootPanel';
// import Audio from '@/components/Audio';
// import Donation from '@/components/Donation';
import LightLamp from '@/components/LightLamp';
// import Form from '@/components/Form';
// import { Popup } from 'vant';
import styles from './index.module.less';

interface TempleProps {}

const Temple: React.FC<TempleProps> = () => {
  // const loginStore = useLoginStore();
  const [dataObj, setDataObj] = useState<Template>();
  const [copInfos, setCopInfos] = useState<TemplateContent>();
  const [isShow, setIsShow] = useState(false);
  const [isPreView, setIsPreView] = useState(false);
  const [show, setShow] = useState(false);
  const [donaAmt, setDonaAmt] = useState(0);
  const [LightLampInfo, setLightLampInfo] = useState({ id: 0, name: '' });
  const codePlateJson = JSON.parse(storage.getItem('codePlateJson') || '{}');
  const token = storage.getItem('token');
  const env = getPayEnv();
  const getParseQRCode = async () => {
    const preProjectId = getUrlCode().preProjectId;
    const data = preProjectId
      ? await getFaithPreView(preProjectId)
      : await getFaithView('45');
    data.templateContent = JSON.parse(data.templateContent as any);
    data.templateList = JSON.parse(data.templateList as any);
    setDataObj(data);
    setCopInfos(data.templateContent);
    setIsShow(true);
    // setPageTitle(data.projectName);
  };
  const loginInfo = async (code: string) => {
    const params: LoginReq = {
      appId: 6,
      thirdLoginAppId: codePlateJson.thirdLoginAppId || 'wxb07dac71f6c8843c',
      code,
      deptId: codePlateJson.qrCodeDecodeStr[0] || '276981',
      loginWay: env == 'wx' ? 2 : 1,
    };
    await loginStore.login(params);
    getParseQRCode();
  };

  const getEnvJumpCode = async () => {
    const preProjectId = getUrlCode().preProjectId;
    if (preProjectId) {
      setIsPreView(true);
      getParseQRCode();
      return;
    }

    let code = '';
    if (env === 'wx') {
      code = getUrlCode().code;
    }
    if (env === 'alipay') {
      code = getQueryParams().auth_code;
    }

    const codePlate = storage.getItem('codePlate') || '';
    if (codePlate && code) {
      storage.setItem('userCode', code);
      loginInfo(code);
    }
  };
  const handlePaySuccess = () => {
    setShow(false);
  };
  useEffect(() => {
    getParseQRCode();
    emitter.on('paySuccess', handlePaySuccess);
    return () => {
      emitter.off('paySuccess', handlePaySuccess);
    };
  }, []);

  const openForm = (item: any) => {
    setShow(true);
    if (dataObj.projectType === 1) {
      setDonaAmt(item);
    } else {
      setLightLampInfo(item);
    }
  };

  return (
    <div className={styles.container}>
      {isShow && (
        <>
          {/* <Audio
            data={
              copInfos['cop-bgm'].display ? copInfos['cop-bgm'].value.url : ''
            }
          /> */}
          {/* <Banner
            model={copInfos['cop-banner'].model}
            data={
              copInfos['cop-banner'].display ? copInfos['cop-banner'].value : ''
            }
          /> */}
          {/* <Content title={copInfos['cop-title'].value}>
            <TextEllipsis content={copInfos['cop-blurb'].value} />
          </Content> */}
          {/* <Content title={copInfos['cop-donaType'].title}>
            <Donation
              list={copInfos['cop-donaType'].value}
              manual={copInfos['cop-donaType'].manual}
              openForm={openForm}
            />
          </Content> */}
          {dataObj.projectType === 2 && (
            <Content title={copInfos['cop-donaLantern'].title || '供灯祈福'}>
              <LightLamp
                list={copInfos['cop-donaLantern'].value}
                openFormfn={openForm}
              />
            </Content>
          )}
          <Content title={copInfos['cop-merit'].title}>
            {isPreView ? (
              <MeritList
                type={dataObj.projectType}
                list={copInfos['cop-merit'].value}
                field={copInfos['cop-merit'].field}
              />
            ) : (
              <MeritList
                type={dataObj.projectType}
                list={copInfos['cop-merit'].value}
                field={copInfos['cop-merit'].field}
              />
            )}
          </Content>
          <div className="h-[60px]" />
          {/* <FootPanel
            title={copInfos['cop-mine'].value}
            num={copInfos['cop-merit'].value?.length || 0}
          />
          <Popup
            show={show}
            style={{
              padding: '20px',
              background: '#F5F4F1',
              borderRadius: '7px',
            }}
            position="center"
            onClickOverlay={() => setShow(false)}
          >
            <Form
              data={copInfos['cop-submit']}
              type={dataObj.projectType}
              donaAmt={donaAmt}
              lanternId={LightLampInfo.id}
              lanternName={LightLampInfo.name}
            />
          </Popup> */}
        </>
      )}
    </div>
  );
};

export default Temple;
