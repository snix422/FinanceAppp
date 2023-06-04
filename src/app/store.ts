import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';
import { IInfluenceAndExpenditure } from '../components/History';




export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export interface IState {
  items:Array<IInfluenceAndExpenditure>,
  monthBudget:number,
  monthExpenditure:number,
  savings:number,
  //dayHistory:Array,
  //monthHistory:[],
  categoryZakupy:number,
  categoryPaliwo:number,
  categoryLeki:number,
  categoryPodroze:number,
  categoryDzieci:number,
  categoryRachunki:number,
  categoryKredyt:number,
  
}

const date = new Date();

    const months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];

    const currentYear = date.getFullYear();
    const currentDay = date.getDate();
    const currentMonthOnNumber = date.getMonth();
    const currentMonth = months[currentMonthOnNumber];


const influenceExpenditureSlice = createSlice({
  name:`influenceandexpenditure`,
  initialState:{
      items:[],
      monthBudget:0,
      monthExpenditure:0,
      savings:0,
      //dayHistory:[],
      //monthHistory:[],
      categoryZakupy:0,
      categoryPaliwo:0,
      categoryLeki:0,
      categoryPodroze:0,
      categoryDzieci:0,
      categoryRachunki:0,
      categoryKredyt:0,
      
  },
  reducers:{
      addInfluence(state:IState,action){
          const newItem = action.payload;
          console.log(newItem);
          state.items.push({amount:newItem.price,monthBudget:newItem.monthBudget,day:newItem.day,year:newItem.year,month:newItem.month,type:'influence'});
          //state.currentCategory.push({price:newItem.price,category:newItem.category});
          const exisItemCategory = state.items.find((item:IInfluenceAndExpenditure)=>item.category == newItem.category);
         

          if(newItem.monthBudget == currentMonth && newItem.year == currentYear){
            const number = Number(newItem.price);
            state.monthBudget += number;
            //state.monthHistory.push({amount:newItem.price,monthBudget:newItem.monthBudget,day:newItem.day,year:newItem.year,month:newItem.month,type:'influence'});
          } 

          if(newItem.day == currentDay && newItem.year == currentYear){
            //state.dayHistory.push({amount:newItem.price,monthBudget:newItem.monthBudget,day:newItem.day,year:newItem.year,month:newItem.month,type:'influence'});
          }

      },
      removeInfluence(state:IState,action){
          const id = action.payload;
          const item = state.items.find((item:IInfluenceAndExpenditure)=>item.id === id);
          state.items = state.items.filter((item:IInfluenceAndExpenditure)=>item.id !== id);
      },
      addExpenditure(state:IState,action){
          const newItem = action.payload;
          state.items.push({amount:newItem.price,category:newItem.category,monthBudget:newItem.month,day:newItem.day,year:newItem.year,type:'expenditure'});
          const exisItemCategory = state.items.find((item:IInfluenceAndExpenditure)=>item.category == newItem.category);
          if(newItem.month == currentMonth && newItem.year == currentYear){
            const number = Number(newItem.price);
            state.monthExpenditure += number;
            //state.monthHistory.push({amount:newItem.price,category:newItem.category,monthBudget:newItem.month,day:newItem.day,year:newItem.year,type:'expenditure'});
          } 

          if(newItem.day == currentDay && newItem.year == currentYear){
           // state.dayHistory.push({amount:newItem.price,category:newItem.category,monthBudget:newItem.month,day:newItem.day,year:newItem.year,type:'expenditure'});
          }


          if(newItem.category == 'zakupy'){
            Number(state.categoryZakupy+=Number(newItem.price))
          }else if(newItem.category == 'paliwo'){
           Number(state.categoryPaliwo+=Number(newItem.price))
          }else if(newItem.category == 'leki'){
            Number(state.categoryLeki+=Number(newItem.price))
          }else if(newItem.category == 'podroze'){
            Number(state.categoryPodroze+=Number(newItem.price))
          }else if(newItem.category == 'dzieci'){
            Number(state.categoryDzieci+=Number(newItem.price))
          }else if(newItem.category == 'rachunki'){
            Number(state.categoryRachunki+=Number(newItem.price))
          }else if(newItem.category == 'kredyt'){
            Number(state.categoryKredyt+=Number(newItem.price))
          }
          
      },
      removeExpenditure(state:IState,action){
          const id = action.payload;
          const item = state.items.find((item:IInfluenceAndExpenditure)=>item.id === id);
          state.items = state.items.filter((item:IInfluenceAndExpenditure)=>item.id !== id);
      }
  }
})


export const influenceAndExpenditureActions = influenceExpenditureSlice.actions;

export const store = configureStore({
  reducer: {
    influenceAndExpenditure: influenceExpenditureSlice.reducer
  },
});
