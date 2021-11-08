<template>
    <v-container>
        <v-row justify="center" class="top">
            <v-col lg="6">
                <v-form ref="form" v-model="valid" lazy-validation>

                    <v-stepper v-model="e6" vertical>

                        <v-stepper-step :complete="e6 > 1" step="1">
                            Dados pessoais
                        </v-stepper-step>

                        <v-stepper-content step="1">

                            <v-text-field v-model="user.nome" :counter="10" :rules="rules" label="Nome completo" required>
                            </v-text-field>

                            <v-text-field v-model="user.nacionalidade" :counter="10" :rules="rules" label="Nacionalidade"
                                required>
                            </v-text-field>

                            <v-text-field v-model="user.datanascimento" :counter="10" :rules="rules"
                                label="Data de nascimento" required>
                            </v-text-field>

                            <v-text-field v-model="user.email" :counter="10" :rules="rules" label="E-mail" required>
                            </v-text-field>

                            <v-text-field v-model="user.statuscivil" :counter="10" :rules="rules" label="Status Civil"
                                required>
                            </v-text-field>

                            <v-text-field v-model="user.telefone" :counter="10" :rules="rules" label="Telefone" required>
                            </v-text-field>

                            <v-text-field v-model="user.github" :counter="10" :rules="rules" label="github" required>
                            </v-text-field>

                            <v-text-field v-model="user.linkedin" :counter="10" :rules="rules" label="LinkedIn" required>
                            </v-text-field>

                            <v-text-field v-model="user.pcd" :counter="10" :rules="rules" label="PCD" required>
                            </v-text-field>

                            <v-btn color="primary" @click="e6 = 2">
                                Continuar
                            </v-btn>

                        </v-stepper-content>


                        <v-stepper-step :complete="e6 > 2" step="2">
                            Endereço
                        </v-stepper-step>

                        <v-stepper-content step="2">

                            <v-text-field v-model="user.cep" :counter="10" :rules="rules" label="CEP" required>
                            </v-text-field>

                            <v-text-field v-model="user.pais" :counter="10" :rules="rules" label="País" required>
                            </v-text-field>

                            <v-text-field v-model="user.estado" :counter="10" :rules="rules" label="Estado" required>
                            </v-text-field>

                            <v-text-field v-model="user.cidade" :counter="10" :rules="rules" label="Cidade" required>
                            </v-text-field>

                            <v-text-field v-model="user.bairro" :counter="10" :rules="rules" label="Bairro" required>
                            </v-text-field>

                            <v-text-field v-model="user.rua" :counter="10" :rules="rules" label="Rua" required>
                            </v-text-field>

                            <v-text-field v-model="user.numero" :counter="10" :rules="rules" label="Número" required>
                            </v-text-field>

                            <v-text-field v-model="user.complemento" :counter="10" :rules="rules" label="Complemento"
                                required>
                            </v-text-field>

                            <v-btn color="primary" @click="e6 = 3">
                                Continuar
                            </v-btn>

                            <v-btn text @click="e6 = 1">
                                Voltar
                            </v-btn>

                        </v-stepper-content>

                        <v-stepper-step :complete="e6 > 3" step="3">
                            Formação Academica
                        </v-stepper-step>

                        <v-stepper-content step="3">

                            <v-text-field v-model="dadosFormacoes.instituicaofaculdade" :rules="rules" label="Instituição" required>
                            </v-text-field>

                            <v-text-field v-model="dadosFormacoes.nomecursofaculdade" :rules="rules" label="Nome do curso" required>
                            </v-text-field>

                            <v-text-field v-model="dadosFormacoes.datainicio" :rules="rules" label="Data de início" required>
                            </v-text-field>

                            <v-text-field v-model="dadosFormacoes.datatermino" :rules="rules" label="Data de conclusão" required>
                            </v-text-field>

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

                            <v-btn color="success" @click="addFormacao()">
                                Adicionar
                            </v-btn>

                            <v-btn color="primary" @click="e6 = 4">
                                Continuar
                            </v-btn>

                            <v-btn text @click="e6 = 2">
                                Voltar
                            </v-btn>


                        </v-stepper-content>

                        <v-stepper-step :complete="e6 > 4" step="4">
                            Experiencia Profissional
                        </v-stepper-step>

                        <v-stepper-content step="4">

                            <v-text-field v-model="dadosEmpregos.empresa" :rules="rules" label="Empresa" required>
                            </v-text-field>

                            <v-text-field v-model="dadosEmpregos.cargo" :rules="rules" label="Cargo" required>
                            </v-text-field>

                            <v-text-field v-model="dadosEmpregos.inicioEmprego" :rules="rules" label=" Data de início " required>
                            </v-text-field>

                            <v-text-field v-model="dadosEmpregos.terminoEmprego" :rules="rules" label="Data de término" required>
                            </v-text-field>

                            <v-textarea v-model = "dadosEmpregos.atividadesEmprego" name="input-4-1" label="Atividades executadas" hint="Descrição das atividades"></v-textarea>

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
                            

                            <v-btn color="success" @click="addEmprego()">
                                Adicionar
                            </v-btn>

                            <v-btn color="primary" @click="e6 = 5">
                                Continuar
                            </v-btn>

                            <v-btn text @click="e6 = 3">
                                Voltar
                            </v-btn>


                        </v-stepper-content>

                        <v-stepper-step :complete="e6 > 5" step="5">
                            Cursos complementares
                        </v-stepper-step>

                        <v-stepper-content step="5">

                            <v-text-field v-model="dadosCursos.nomecursocomplementar" :rules="rules" label="Nome do curso" required>
                            </v-text-field>

                            <v-text-field v-model="dadosCursos.instituicaocomplementar" :rules="rules" label="Instituição" required>
                            </v-text-field>

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

                            <v-btn color="success" @click="addCurso()">
                                Adicionar
                            </v-btn>

                            <v-btn color="primary" @click="e6 = 6">
                                Continuar
                            </v-btn>

                            <v-btn text @click="e6 = 4">
                                Voltar
                            </v-btn>

                        </v-stepper-content>

                        <v-stepper-step :complete="e6 > 6" step="6">
                            Idiomas
                        </v-stepper-step>

                        <v-stepper-content step="6">

                            <v-text-field v-model="dadosIdiomas.idioma" :rules="rules" label="Idioma" required></v-text-field>

                            <v-text-field v-model="dadosIdiomas.proeficiencia" :rules="rules" label="Proeficiencia" required>
                            </v-text-field>

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

                            <v-btn color="success" @click="addIdioma()">
                                Adicionar
                            </v-btn>

                            <v-btn color="primary" @click="e6 = 7">
                                Continuar
                            </v-btn>

                            <v-btn text @click="e6 = 5">
                                Voltar
                            </v-btn>

                        </v-stepper-content>

                        <v-stepper-step :complete="e6 > 7" step="7">
                            Informações adicionais
                        </v-stepper-step>

                        <v-stepper-content step="7">

                            <v-text-field v-model="user.adicionais" :rules="rules" label="Adicionais" required>
                            </v-text-field>

                            <v-btn color="primary" @click="e6 = 8">
                                Continuar
                            </v-btn>

                            <v-btn text @click="e6 = 6">
                                Voltar
                            </v-btn>

                        </v-stepper-content>

                        <v-stepper-step :complete="e6 > 8" step="8">
                            Termo de uso
                        </v-stepper-step>

                        <v-stepper-content step="8">

                            <v-checkbox v-model="checkbox"
                                :rules="[(v) => !!v || 'Voce precisa marcar a caixa para continuar!']"
                                label="Confirmo que li os termos de contrato do serviço" required></v-checkbox>

                            <v-btn :disabled="!valid" color="success" class="mr-4" @click="registrar">
                                Registrar
                            </v-btn>

                            <v-btn color="error" class="mr-4" @click="e6 = 7"> Cancelar </v-btn>

                        </v-stepper-content>

                    </v-stepper>

                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            user: {
                nome: "",
                nacionalidade: "",
                datanascimento: "",
                email: "",
                statuscivil: "",
                telefone: "",
                github: "",
                linkedin: "",
                pcd: "",
                cep: "",
                pais: "",
                estado: "",
                cidade: "",
                bairro: "",
                rua: "",
                numero: "",
                complemento: "",
                adicionais: "",
            },
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

            valid: false,
            rules: [(v) => !!v || "Campo inválido"],
            e6: 1,
        }),
        methods: {
            registrar() {
                this.$refs.form.registrar();
            },
            cancelar() {
                this.$refs.form.cancelar();
            },
            addEmprego(){
                this.empregos.push({
                    empresa: this.dadosEmpregos.empresa,
                    cargo: this.dadosEmpregos.cargo,
                    inicioEmprego: this.dadosEmpregos.inicioEmprego,
                    terminoEmprego: this.dadosEmpregos.terminoEmprego,
                    atividadesEmprego: this.dadosEmpregos.atividadesEmprego
                });
                this.dadosEmpregos = {
                    empresa: "",
                    cargo: "",
                    inicioEmprego: "",
                    terminoEmprego: "",
                    atividadesEmprego: ""
                }
            },
            addFormacao(){
                this.formacoes.push({
                    instituicaofaculdade: this.dadosFormacoes.instituicaofaculdade,
                    nomecursofaculdade: this.dadosFormacoes.nomecursofaculdade,
                    datainicio: this.dadosFormacoes.datainicio,
                    datatermino: this.dadosFormacoes.datatermino,
                });
                this.dadosFormacoes = {
                    instituicaofaculdade: "",
                    nomecursofaculdade: "",
                    datainicio: "",
                    datatermino: ""
                }
            },
            addCurso(){
                this.cursos.push({
                    nomecursocomplementar: this.dadosCursos.nomecursocomplementar,
                    instituicaocomplementar: this.dadosCursos.instituicaocomplementar,
                });
                this.dadosCursos = {
                    nomecursocomplementar: "",
                    instituicaocomplementar: ""
                }
            },
            addIdioma(){
                this.idiomas.push({
                    idioma: this.dadosIdiomas.idioma,
                    proeficiencia: this.dadosIdiomas.proeficiencia,
                });
                this.dadosCursos = {
                    idioma: "",
                    proeficiencia: ""
                }
            },
        },
    };
</script>

<style>
</style>