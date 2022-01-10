import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "m1",
                    image:
                        "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                    title: "Ir a lavra cultivar",
                    description: "Uma tarefa muita cansativa. Porém satisfatória.",
                },
                {
                    id: "m2",
                    image:
                        "https://images.unsplash.com/photo-1511407401960-0ee203836665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                    title: "Estudar no kasseke na primeira classe",
                    description: "Uma tarefa muita cansativa. Porém satisfatória.",
                },
                {
                    id: "m3",
                    image:
                        "https://images.unsplash.com/photo-1532387482281-c56ef57652ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
                    title: "Banhar na praia em janeiro de 2020",
                    description: "Uma tarefa muita cansativa. Porém satisfatória.",
                },
                
            ],
        }
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description,
            }

            console.log(newMemory);

            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state) {
            return state.memories
        },
        memory(state) {
            return (memoryId) => {
                // console.log("Id da memória...", memoryId);
                return state.memories.find((memory) => memory.id === memoryId)
            };            
        }
    }
});

export default store;