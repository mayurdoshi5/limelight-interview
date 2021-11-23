import { Action, Selector, State, StateContext } from "@ngxs/store";
import { FilterTodo } from "./filter.action";

interface FilterStateModel {
    filter: string;
}
type filterContext = StateContext<FilterStateModel>;

@State<FilterStateModel>({
    name: 'filter',
    defaults: {
        filter: 'All'
    }
})

export class FilterState {

    @Selector()
    static getFilter(state: FilterStateModel) {
        return state.filter;
    }

    @Action(FilterTodo)
    filterTodo(ctx: filterContext, { filter }: FilterTodo) {
        ctx.patchState({
            filter: filter === undefined ? 'All' : filter
        });
    }
}