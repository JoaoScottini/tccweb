<template>

    <v-container fluid class="grey lighten-5 text-center">
        <v-row justify="center" class="top">
        <v-col lg="6" >
        <v-container>
                <v-card-title class="text-h5">
                Dados pessoais
                </v-card-title>
            <v-row>

                <v-col>
                    <v-card-title class="text-h6">
                        Nome
                    </v-card-title>
                    <v-card-subtitle label="Nome">
                        João Pedro Scottini
                    </v-card-subtitle>
                </v-col>
                
                <v-col>
                    <v-card-title class="text-h6">
                        e-mail
                    </v-card-title>
                    <v-card-subtitle label="Nome">
                        jpscottini@gmail.com
                    </v-card-subtitle>
                </v-col>
                
            </v-row>

            <v-row>

                <v-col>
                    <v-card-title class="text-h6">
                        PCD
                    </v-card-title>
                    <v-card-subtitle label="Nome">
                        Nenhuma
                    </v-card-subtitle>
                </v-col>
                
                <v-col>
                    <v-card-title class="text-h6">
                        LinkedIn
                    </v-card-title>
                    <v-card-subtitle label="Nome">
                        <a>https://www.linkedin.com/in/jo%C3%A3o-pedro-scottini-547062165/</a>
                    </v-card-subtitle>
                </v-col>
                
            </v-row>

            <v-row>
                <v-col>
                    <v-card-title class="text-h6">
                        github
                    </v-card-title>
                    <v-card-subtitle label="Nome">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at tellus id lacus porta sollicitudin. Aliquam in sapien lorem. Sed eu nibh vel nisi posuere pharetra. Etiam id euismod quam. Cras eleifend nisl et quam molestie, non bibendum orci ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. 
                    </v-card-subtitle >
                </v-col>
            </v-row>

        </v-container>



        <v-container>
                <v-card-title class="text-h5">
                Formação Acadêmica
                </v-card-title>
            <v-row>

                <template>
                    <v-card>
                        <v-card-title>
                            <v-text-field
                                v-model="searchFormacoes"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                            </v-card-title>
                                <v-data-table
                                    :headers="headerFormacoes"
                                    :items="formacoes"
                                    :search="search"
                                ></v-data-table>
                    </v-card>
                </template>
                
            </v-row>

        </v-container>



        <v-container>
                <v-card-title class="text-h5">
                Experiencia Profissional
                </v-card-title>
            <v-row>

            <template>
                <v-card>
                    <v-card-title>
                    <v-text-field
                        v-model="searchEmpregos"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        :headers="headerEmpregos"
                        :items="empregos"
                        :search="search"
                    ></v-data-table>
                </v-card>
            </template>
                
            </v-row>

        </v-container>



        <v-container>
                <v-card-title class="text-h5">
                Cursos Complementares
                </v-card-title>
            <v-row>

            <template>
                <v-card>
                    <v-card-title>
                    <v-text-field
                        v-model="searchCursos"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        :headers="headerCursos"
                        :items="cursos"
                        :search="search"
                    ></v-data-table>
                </v-card>
            </template>
                
            </v-row>

        </v-container>


        <v-container>
            <v-card-title class="text-h5">
                Idiomas
                </v-card-title>
            <v-row>

            <template>
                <v-card>
                    <v-card-title>
                    <v-text-field
                        v-model="searchIdiomas"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        :headers="headerIdiomas"
                        :items="idiomas"
                        :search="search"
                    ></v-data-table>
                </v-card>
            </template>
                
            </v-row>

        </v-container>
        </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        data: () => ({
            searchEmpregos: '',
            headerEmpregos: [
                {
                    text: 'Empresa',
                    align: 'start',
                    filterable: true,
                    value: 'empresa',
                },
                { text: 'Cargo', value: 'cargo' },
                { text: 'Inicio Emprego', value: 'inicioEmprego' },
                { text: 'Termino emprego', value: 'terminoEmprego' },
                { text: 'Atividades executadas', value: 'atividadesEmprego' }
            ],
            empregos: [],
            dadosEmpregos: {
                empresa: "",
                cargo: "",
                inicioEmprego: "",
                terminoEmprego: "",
                atividadesEmprego: "",
            },
            searchFormacoes: '',
            headerFormacoes: [
                {
                    text: 'Instituição',
                    align: 'start',
                    filterable: true,
                    value: 'instituicaofaculdade',
                },
                { text: 'Curso', value: 'nomecursofaculdade' },
                { text: 'Inicio', value: 'datainicio' },
                { text: 'Termino', value: 'datatermino' }
            ],
            formacoes: [],
            dadosFormacoes: {
                instituicaofaculdade: "",
                nomecursofaculdade: "",
                datainicio: "",
                datatermino: "",
            },
            searchCursos: '',
            headerCursos: [
                {
                    text: 'Nome',
                    align: 'start',
                    filterable: true,
                    value: 'nomecursocomplementar',
                },
                { text: 'Instituição', value: 'instituicaocomplementar' }
            ],
            cursos: [],
            dadosCursos: {
                nomecursocomplementar: "",
                instituicaocomplementar: "",
            },
            searchIdiomas: '',
            headerIdiomas: [
                {
                    text: 'Idioma',
                    align: 'start',
                    filterable: true,
                    value: 'idioma',
                },
                { text: 'Proeficiencia', value: 'proeficiencia' }
            ],
            idiomas: [],
            dadosIdiomas: {
                idioma: "",
                proeficiencia: "",
            },
        }),
        methods: {
        },
    };
</script>