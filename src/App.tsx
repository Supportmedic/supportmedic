import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import React from 'react';
import SinglePlanning from './pages/plannings/SinglePlanning';
import MesHeuresDeTravail from './pages/heuresdetravail/MesHeuresDeTravail';
import FormulairedeDemandedeConge from './pages/demandesdeconge/FormulairedeDemandedeConge';
import Remplacement from './pages/remplacements/Remplacement';
import Mapresence from './pages/presences/Mapresence';
import Plannings from './pages/plannings/Plannings';
import TouslesEmployees from './pages/employees/TouslesEmployees';
import AjouterUnEmploye from './pages/employees/AjouterUnEmploye';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="" />
              <Buttons />
            </>
          }
        />

        <Route
          path="/mes-plannings"
          element={
            <>
              <PageTitle title="" />
              <SinglePlanning />
            </>
          }
        />


        <Route
          path="/mes-heures-de-travail"
          element={
            <>
              <PageTitle title="" />
              <MesHeuresDeTravail />
            </>
          }
        />

        <Route
          path="/demande-de-conge"
          element={
            <>
              <PageTitle title="" />
              <FormulairedeDemandedeConge />
            </>
          }
        />

        <Route
          path="/ajouter-un-employe"
          element={
            <>
              <PageTitle title="" />
              <AjouterUnEmploye />
            </>
          }
        />

        <Route
          path="/remplacement"
          element={
            <>
              <PageTitle title="" />
              <Remplacement />
            </>
          }
        />

        <Route
          path="/presences"
          element={
            <>
              <PageTitle title="" />
              <Mapresence />
            </>
          }
        />

        <Route
          path="/tous-les-plannings"
          element={
            <>
              <PageTitle title="" />
              <Plannings />
            </>
          }
        />

        <Route
          path="/employees"
          element={
            <>
              <PageTitle title="" />
              <TouslesEmployees />
            </>
          }
        />

        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
