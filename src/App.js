import './App.css';
import { Routes, Route } from 'react-router-dom';
// auth
import Menu from './components/pages_auth/Menu';
import Auth from './components/pages_auth/Auth';
import AuthNewDevice from './components/pages_auth/AuthNewDevice';
import AuthChangePassword from './components/pages_auth/AuthChangePassword'
import MessageChange from './components/pages_auth/MessageChange';
// creatives
import Creatives from './components/pages_creative/Creatives';
import {SingleCreative} from './components/pages_creative/SingleCreative';
import {StatusCreative} from './components/pages_creative/StatusCreative';
import StatisticsCreative from './components/pages_creative/StatisticsCreative';
import DetailsCreative from './components/pages_creative/DetailsCreative';
import FilterCreatives from './components/pages_creative/FilterCreatives';
// publics
import Publics from './components/pages_publics/Publics';
import FilterPublics from './components/pages_publics/FilterPublics';
import { CheckPublic } from './components/pages_publics/CheckPublic';
import {StatusPublic} from './components/pages_publics/StatusPublic';
import StatisticsPublic from './components/pages_publics/StatisticsPublic';
// users base
import UsersBase from './components/pages_base_users/DataBaseUsers';
import FilterUsers from './components/pages_base_users/FilterUsers';
// notices
import Notices from './components/pages_notices/Notices';
import AutoNotices from './components/pages_notices/AutoNotices';
import SendNotices from './components/pages_notices/SendNotices';
// statistics
import Statistics from './components/pages_statistics/Statistics';
// publications
import Publications from './components/pages_publications/Publications';
import PublciationSettings from './components/pages_publications/PublciationSettings';
import Reservations from './components/pages_publications/Reservations';
import ReservationArchive from './components/pages_publications/ReservationArchive';
// ads
import AdLinks from './components/pages_ads/AdLinks';
import AdLinksCreate from './components/pages_ads/AdLinksCreate';
// prising
import PricingMenu from './components/pages_prising/PricingMenu';
import ServiceCommission from './components/pages_prising/ServiceCommission';
import CPMSettings from './components/pages_prising/CPMSettings';
import SpecialCommission from './components/pages_prising/SpecialCommission';
import SpecialMembers from './components/pages_prising/SpecialMembers';
import FilterMembers from './components/pages_prising/FilterMembers';
import Referral from './components/pages_prising/Referral';
import ReferralSettings from './components/pages_prising/ReferralSettings';
// tech
import TechDocs from './components/pages_tech/TechDocs';


import SendAutoNotice from './components/pages_notices/SendAutoNotice';
import AllStat from './components/pages_statistics/AllStat';
import InfoReservation from './components/pages_publications/InfoReservation';
import ChangeReservation from './components/pages_publications/ChangeReservation';
import HistoryOut from './components/pages_base_users/HistoryOut';
import HystoryUp from './components/pages_base_users/HistoryUp';
import LockUser from './components/pages_base_users/LockUser';
import WarningUser from './components/pages_base_users/WarningUser';
import InfoUser from './components/pages_base_users/InfoUser';
import NoticeUser from './components/pages_base_users/NoticeUser';
import StatRefferal from './components/pages_prising/StatRefferal';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='auth-new' element={<AuthNewDevice/>}/>
        <Route path='auth-change' element={<AuthChangePassword/>} />
        <Route path='message-change' element={<MessageChange/>} />

        <Route path='creatives' element={<Creatives/>}/>
        <Route path='creatives/filter' element={<FilterCreatives/>} />
        <Route path='creatives/:id' element={<SingleCreative/>} />
        <Route path='creatives/:id/status' element={<StatusCreative/>} />
        <Route path='creatives/:id/details' element={<DetailsCreative/>} />
        <Route path='creatives/:id/statistics' element={<StatisticsCreative/>} />
        
        <Route path='publics' element={<Publics/>}/>
        <Route path='publics/filter' element={<FilterPublics/>}/>
        <Route path='publics/:id' element={<CheckPublic/>} />
        <Route path='publics/:id/status' element={<StatusPublic/>} />
        <Route path='publics/:id/statistics' element={<StatisticsPublic/>} />

        <Route path='usersbase' element={<UsersBase/>} />
        <Route path='usersbase/filter' element={<FilterUsers/>} />
        <Route path='userbase/hy-out' element={<HistoryOut/>} />
        <Route path='userbase/hy-up' element={<HystoryUp/>} />
        <Route path='lock' element={<LockUser/>}/>
        <Route path='warning' element={<WarningUser/>}/>
        <Route path='info' element={<InfoUser/>} />
        <Route path='notice-user' element={<NoticeUser/>} />

        <Route path='notices' element={<Notices/>} />
        <Route path='notices/auto-notices' element={<AutoNotices/>}/>
        <Route path='notices/:autoID' element={<SendAutoNotice/>} />
        <Route path='notices/send-notices' element={<SendNotices/>}/>

        <Route path='statistics' element={<Statistics/>} />
        <Route path='statistics/all-statistics' element={<AllStat/>} />

        <Route path='publications' element={<Publications/>} />
        <Route path='publications/publication-settings' element={<PublciationSettings/>} />
        <Route path='publications/reservations' element={<Reservations/>} />
        <Route path='publications/reservations/archive' element={<ReservationArchive/>}/>
        <Route path='publications/reservations/info' element={<InfoReservation/>} />
        <Route path='publications/reservations/change' element={<ChangeReservation/>} />

        <Route path='links' element={<AdLinks/>}/>
        <Route path='links/links-create' element={<AdLinksCreate/>} />

        <Route path='pricing-menu' element={<PricingMenu/>} />
        <Route path='pricing-menu/service-commission' element={<ServiceCommission/>} />

        <Route path='pricing-menu/cpm-settings' element={<CPMSettings/>}/>

        <Route path='pricing-menu/special-commission-menu' element={<SpecialCommission/>} />
        <Route path='pricing-menu/special-commission-menu/members' element={<SpecialMembers/>} />
        <Route path='pricing-menu/special-commission-menu/members/filter-members' element={<FilterMembers/>} />

        <Route path='pricing-menu/referral' element={<Referral/>} />
        <Route path='pricing-menu/referral/referral-settings' element={<ReferralSettings/>} />

        <Route path='pricing-menu/referral/stat' element={<StatRefferal/>} />

        <Route path='tech' element={<TechDocs/>} />
      </Routes>
    </div>
  );
}

export default App;
